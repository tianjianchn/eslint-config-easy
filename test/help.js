
const eslint = require('eslint');
const path = require('path');

const config = require('..');

// http://eslint.org/docs/developer-guide/nodejs-api
const cli = new eslint.CLIEngine({
  useEslintrc: false,
  baseConfig: config,
});

function fileShouldOk(fileName) {
  const result = cli.executeOnFiles([path.join(__dirname, 'fixtures', `${fileName}.js`)]).results[0];
  if (result.errorCount !== 0 || result.warningCount !== 0) {
    throw new Error(`${JSON.stringify(result)} `);
  }
}

function codeShouldOk(code) {
  const result = cli.executeOnText(code).results[0];
  if (result.errorCount !== 0 || result.warningCount !== 0) {
    throw new Error(result);
  }
}

function codeShouldWarn(code, ruleName) {
  const result = cli.executeOnText(code).results[0];
  if (result.errorCount !== 0 || result.warningCount === 0) {
    throw new Error(result);
  } else if (ruleName) {
    if (result.message) console.warn(result.message);
  }
}

function codeShouldError(code, ruleName) {
  const result = cli.executeOnText(code).results[0];
  if (result.errorCount !== 0 || result.warningCount === 0) {
    throw new Error(result);
  }
}

module.exports = { fileShouldOk, codeShouldOk, codeShouldWarn, codeShouldError };
