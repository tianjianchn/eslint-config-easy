airbnb + babel + promise + import + react
=================================

[eslint-config-easy](https://github.com/kiliwalk/eslint-config-easy) is based on [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) as airbnb is the most popular one.  
But airbnb is too strict on some syntax rules(like `consistent-return`, `global-require` etc), make it hard to migrate my old projects.  
I didn't change much more about the style rules, since using Visual Studio Code can auto-fix the spaces on save. I prefer you try it other than sublime text.  

## Features
* Based on eslint-config-airbnb that supports es6/es7+, react, import and jsx-a11y
* Use babel-eslint to support class properties, decorators, types.
* Use [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise) to enforce best practices for promise

## Install
*Should only used with npm@>=3*

`npm i eslint-config-easy -D`

## Usage
In your project root dir, create a file `.eslintrc` with content:  
```js
{
  "extends": "easy"
}
```

## Tools for dev
* `npm run calculate`: to see the whole config of easy and airbnb, and their differences(result in calculated dir)
* `npm run diff-yours -- "your .eslintrc file full path"`: to see the differences between your current config and easy

## License
Licensed under MIT

Copyright (c) 2017 [Tian Jian](https://github.com/tianjianchn)