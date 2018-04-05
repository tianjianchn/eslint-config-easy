
module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules.js',
  ].map(require.resolve),
  parser: 'babel-eslint',
  plugins: [
    'promise',
    'html',
  ],
};
