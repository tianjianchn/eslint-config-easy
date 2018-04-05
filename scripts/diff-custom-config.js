/* eslint import/no-extraneous-dependencies:off */


const path = require('path');
const { extractConfig, diffConfig } = require('./util');

const easy = extractConfig('index.js');

const condidateFilePath = process.argv[2];
if (!condidateFilePath) {
  console.error('your config file required');
  return;
}

const customFilePath = path.resolve(path.dirname(__dirname), condidateFilePath);//eslint-disable-line
const custom = extractConfig(customFilePath);

// Object.keys(candidate.rules).forEach(ruleName=>{
//   let rule = candidate.rules[ruleName];
//   if(typeof rule === 'number') rule = [['off', 'warn', 'error'][rule]];
//   else if(!Array.isArray(rule)) rule = [rule];
//   candidate.rules[ruleName] = rule;
// })

const outputFile = 'custom-vs-easy.json';
diffConfig(['custom', custom], ['easy', easy], 'left', outputFile);

console.log(`diff between custom and easy in file ./diff-results/${outputFile}`);

