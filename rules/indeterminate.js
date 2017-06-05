
module.exports = { rules: {
  'guard-for-in': 'off', // off to allow no if(key) in for...in
  'import/no-unresolved': 'error', // may be off when use webpack resolve/modulesDirectories property
  'no-param-reassign': 'off', // off to allow reassign function params
  'jsx-a11y/img-has-alt': 'off',
} };
