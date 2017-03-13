
module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/syntax.js',
    './rules/style.js',
    './rules/indeterminate.js',
  ].map(require.resolve),
  parser: 'babel-eslint',
  plugins: [
    'promise',
  ],
};
