/* eslint import/no-extraneous-dependencies:off */

const path = require('path');
const { extractConfig, diffConfig } = require('./util');

const rootDir = path.dirname(__dirname);

const easyConfig = extractConfig(path.join(rootDir, 'index.js'), 'easy-config.json');
console.log('easy config in file ./diff-results/easy-config.json');

const airbnbConfig = extractConfig(path.join(rootDir, 'node_modules', 'eslint-config-airbnb', 'index.js'), 'airbnb-config.json');
console.log('airbnb config in file ./diff-results/airbnb-config.json');

diffConfig(['airbnb', airbnbConfig], ['easy', easyConfig], 'both', 'airbnb-vs-easy.json');
console.log('diff between airbnb and easy in file ./diff-results/airbnb-vs-easy.json');

console.log(() =>
  'sss');
