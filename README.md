airbnb + babel + promise + import + react + html
=================================

[eslint-config-easy](https://github.com/kiliwalk/eslint-config-easy) is based on [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) as airbnb is the most popular one.

But airbnb is too strict on some syntax rules(like `consistent-return`, `global-require` etc), make it hard to migrate my old projects.

I didn't change much more about the style rules(most about spaces), since using Visual Studio Code can auto-fix the spaces on save. I prefer you try it other than Sublime Text.  

## Features
* Based on eslint-config-airbnb that supports es6/es7+, react, import and jsx-a11y
* Use babel-eslint to support class properties, decorators, types.
* Use [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise) to enforce best practices for promise
* Use [eslint-plugin-html](https://github.com/BenoitZugmeyer/eslint-plugin-html) to support .html/.vue. If you want auto-fix in VSCode for .vue, please see [below](#lint-vue-files)

## Install
*Should only used with npm@>=3*

`npm i eslint-config-easy -D` or `yarn add eslint-config-easy -D`

## Usage
In your project root dir, create a file `.eslintrc` with content:  
```js
{
  "extends": "easy"
}
```

You can add `NODE_ENV=production` for production lint(like `NODE_ENV=production eslint src`), which will enforce `no-alert`, `no-console`, `no-debugger`.

## Lint .vue files
Since eslint will only lint .js files default, you need add `--ext .js,.html,.vue` option for .vue files.

If you want auto-fix .vue files in VSCode with its eslint plugin, you should add the user/workspace settings below in VSCode:
```json
  // Enable/disable JavaScript validation.
  "javascript.validate.enable": false,
  // Turns auto fix on save on or off.
  "eslint.autoFixOnSave": true,
  // An array of language ids which should be validated by ESLint
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { 
      "language": "html", "autoFix": true
    },
    { 
      "language": "vue", "autoFix": true
    }
  ],
```

## Tools for dev
* `npm run calculate`: to see the whole config of `easy` and `airbnb`, and their differences(result in `calculated` dir)
* `npm run diff-yours -- "your .eslintrc file full path"`: to see the differences between your current config and `easy`

## License
Licensed under MIT

Copyright (c) 2017 [Tian Jian](https://github.com/tianjianchn)