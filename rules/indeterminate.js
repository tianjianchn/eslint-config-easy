
module.exports = { rules: {
  'guard-for-in': 'off', // off to allow no if(key) in for...in
  'import/no-unresolved': 'error', // may be off when use webpack resolve/modulesDirectories property
  'no-param-reassign': 'off', // off to allow reassign function params
  'no-unused-vars': ['error', { // allow params in function not used
    vars: 'all',
    args: 'none',
  }],
  // // if there are two more properties, then one property one line
  // 'object-curly-newline': ['error', {
  //   ObjectExpression: {
  //     multiline: true,
  //     minProperties: 1,
  //   },
  // }],
  'object-property-newline': 'off', // for git readability, maybe should be on
  'jsx-a11y/img-has-alt': 'off',
} };
