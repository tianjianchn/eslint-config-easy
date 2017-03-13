/* eslint import/no-extraneous-dependencies:off*/


const path = require('path');
const util = require('./util');
const extractConfig = util.extractConfig,
  diffConfig = util.diffConfig;

const easy = extractConfig('index.js');

const condidateFilePath = process.argv[2];
if (!condidateFilePath) {
  console.error('your config file required');
  return;
}

const yoursFilePath = path.resolve(path.dirname(__dirname), condidateFilePath);//eslint-disable-line
const yours = extractConfig(yoursFilePath);

// Object.keys(candidate.rules).forEach(ruleName=>{
//   let rule = candidate.rules[ruleName];
//   if(typeof rule === 'number') rule = [['off', 'warn', 'error'][rule]];
//   else if(!Array.isArray(rule)) rule = [rule];
//   candidate.rules[ruleName] = rule;
// })

const outputFile = 'yours-vs-easy.json';
diffConfig(['yours', yours], ['easy', easy], 'left', outputFile);

console.log(`diff between yours and easy in file ${outputFile}`);

