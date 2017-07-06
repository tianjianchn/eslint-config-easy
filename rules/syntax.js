
// all commented rules below are fixable, so no need to off them

module.exports = { rules: {
  'consistent-return': 'off', // off to allow `return;` and `return something;`
  'default-case': 'off', // off to allow no default branch in switch
  'import/no-named-as-default-member': 'off', // off to allow named export also be default member
  'func-names': 'error', // error to ensure explicit function name required
  'global-require': 'off', // off to allow dynamic require
  'handle-callback-err': ['error', '^(err|error)$'],
  'no-bitwise': 'off', // off to allow binary ops
  'no-console': process.env.NODE_ENV === 'production' ? 2 : 0, // allow console during development
  'no-continue': 'off', // off to allow continue
  'no-else-return': 'off', // off to allow `else return;`
  'no-empty': ['error', { allowEmptyCatch: true }],
  'no-mixed-operators': 'off', // off to allow a + b / c
  'no-nested-ternary': 'off', // off to allow multiple conditional statement like a? b: c? d: e
  'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }], // allow ++ in for, but error in otherwhere
  'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'], // not allow with()/label:
  'no-shadow': ['error', {
    builtinGlobals: true,
    hoist: 'functions',
    allow: ['err'],
  }],
  'no-underscore-dangle': ['error', { allowAfterThis: true }], // error to call instance._prop, but allow this._prop
  'no-unused-expressions': ['error', { allowShortCircuit: true }], // allow fn && fn();
  'no-use-before-define': ['error', {
    functions: false,
    classes: true,
  }],
  'no-useless-call': 'error',
  'promise/always-return': 'error',
  'promise/catch-or-return': 'error',
  'promise/no-native': 'off',
  'promise/param-names': 'off',
  'react/jsx-space-before-closing': 'off', // off for deprecated by react/jsx-tag-spacing
  'react/prefer-es6-class': 'off',
  'require-yield': 'off',
  'vars-on-top': 'off', // off to allow define vars in the middle of the body
  // 'object-shorthand': 'off', // off to not care whether use {x, f(){}}
  // 'prefer-const': 'off', // off to allow let for un-reassigned vars
  // 'wrap-iife': ['error', 'any'],
  // strict: 'off', // off to allow 'use strict' in script file
  'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // allow debugger during development
  'no-alert': process.env.NODE_ENV === 'production' ? 2 : 0, // allow debugger during development
} };
