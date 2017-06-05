
// all commented rules below are fixable, so no need to off them

module.exports = {
  rules: {
    'import/newline-after-import': 'off',
    // 'max-len': 'off', // off to allow unlimited line length
    'one-var': 'off', // off to allow mutiple var delcaration statements
    'react/jsx-filename-extension': 'off', // off to allow jsx in .js
    'object-property-newline': [ // force one property one line
      'error',
      {
        allowMultiplePropertiesPerLine: true,
      },
    ],
    'object-curly-newline': ['error', { // if there are two more properties, then one property one line
      ObjectExpression: {
        multiline: true,
        minProperties: 1,
      },
      ObjectPattern: 'never',
    }],
    'no-unused-vars': ['error', { // allow params in function not used
      vars: 'all',
      args: 'after-used',
    }],
    'newline-per-chained-call': [ // one method call one line. method call is something like obj.foo(), not include obj['foo']
      'error',
      {
        ignoreChainWithDepth: 3,  // first line allow 3 method calls
      },
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        MemberExpression: 1,
        ArrayExpression: 1,
      },
    ],
    // 'array-bracket-spacing': 'off',
    // 'arrow-body-style': 'off',
    // 'arrow-parens': 'off',
    // 'arrow-spacing': 'off',
    // 'block-spacing': 'off',
    // 'comma-dangle': 'off', // off to not care the trailing comma used
    // 'comma-spacing': 'off', // off to allow no space between comma and comment
    // 'jsx-quotes': 'off', // off to allow single and double quotes
    // 'keyword-spacing': 'off', // off to allow no space in keyword(like if/else/for)
    // 'lines-around-directive': 'off',
    // 'no-trailing-spaces': 'off', // off to not care this
    // 'object-curly-spacing': 'off', // off to not care the space in {}
    // 'one-var-declaration-per-line': 'off', // off to allow mutiple vars declaration in one line
    // 'prefer-template': 'off', // off to allow "xxx" + yyy
    // 'quote-props': 'off', // off to not care the quotes on object property
    // 'react/jsx-space-before-closing': 'off',
    // 'space-before-blocks': 'off',
    // 'space-before-function-paren': 'off',
    // 'space-infix-ops': 'off',
    // 'spaced-comment': 'off',
    // quotes: 'off', // off to not care '' or "" or ``
    // semi: 'off', // off to not care whether use semicolon
  },
};
