
// all commented rules below are fixable, so no need to off them

module.exports = {
  rules: {
    'import/newline-after-import': 'off',
    'one-var': 'off', // off to allow mutiple var delcaration statements
    'react/jsx-filename-extension': 'off', // off to allow jsx in .js
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
  },
};
