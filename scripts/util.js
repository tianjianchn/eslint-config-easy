/* eslint import/no-extraneous-dependencies:off*/


const path = require('path');
const fs = require('fs');
const eslint = require('eslint');
const jsonfile = require('jsonfile');
const uniq = require('lodash.uniq');
const isEqual = require('lodash.isequal');

try {
  fs.mkdirSync('calculated');
} catch (e) {}

function extractConfig(configFile, outputFile) {
  const options = {
    useEslintrc: false,
    configFile,
  };

  if (path.isAbsolute(configFile)) {
    options.cwd = path.dirname(configFile);
  }

  const cli = new eslint.CLIEngine(options);

  const config = cli.getConfigForFile();

  if (outputFile) {
    jsonfile.writeFileSync(path.join('calculated', outputFile), config, { spaces: 2 });
  }

  return config;
}

function diffConfig(left, right, keysMode, outputFile) {
  const leftName = left[0],
    leftConfig = left[1];
  const rightName = right[0],
    rightConfig = right[1];
  // rules diff
  let ruleNames = null;
  if (keysMode === 'both') ruleNames = uniq(Object.keys(leftConfig.rules).concat(Object.keys(rightConfig.rules)));
  else if (keysMode === 'left') ruleNames = Object.keys(leftConfig.rules);
  else if (keysMode === 'right') ruleNames = Object.keys(rightConfig.rules);
  ruleNames = ruleNames.sort();

  const rulesDiff = {};
  for (const ruleName of ruleNames) {
    const leftRule = parseRule(leftConfig.rules[ruleName]);
    const rightRule = parseRule(rightConfig.rules[ruleName]);

    if (!leftRule) {
      rulesDiff[ruleName] = {
        [rightName]: rightRule.compact,
      };
    } else if (!rightRule) {
      rulesDiff[ruleName] = {
        [leftName]: leftRule.compact,
      };
    } else if (leftRule.level === rightRule.level && leftRule.level === 'off') {
      continue;
    } else if (leftRule.level !== rightRule.level || !isEqual(leftRule.options, rightRule.options)) {
      rulesDiff[ruleName] = {
        [leftName]: leftRule.compact,
        [rightName]: rightRule.compact,
      };
    }
  }

  jsonfile.writeFileSync(path.join('calculated', outputFile), rulesDiff, { spaces: 2 });
}

function parseRule(rule) {
  if (rule !== 0 && !rule) return null;

  if (!Array.isArray(rule)) rule = [rule];

  let level = rule[0];
  const options = rule.slice(1);

  if (typeof level === 'number') level = ['off', 'warn', 'error'][level];

  let compact = [level].concat(options);
  if (compact.length === 1) {
    compact = compact[0];
  } else if (compact[0] === 'off') {
    compact = 'off';
  }

  return { level, options, compact };
}

module.exports = {
  extractConfig,
  diffConfig,
};
