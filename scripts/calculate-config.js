/* eslint import/no-extraneous-dependencies:off*/


const fs = require('fs');
const util = require('./util');
const extractConfig = util.extractConfig,
  diffConfig = util.diffConfig;

try {
  fs.mkdirSync('calculated');
} catch (e) {}

const easyConfig = extractConfig('index.js', 'easy-config.json');
console.log('easy config in file easy-config.json');

const airbnbConfig = extractConfig('airbnb', 'airbnb-config.json');
console.log('airbnb config in file airbnb-config.json');

diffConfig(['airbnb', airbnbConfig], ['easy', easyConfig], 'both', 'airbnb-vs-easy.json');
console.log('diff between airbnb and easy in file airbnb-vs-easy.json');

