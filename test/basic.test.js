
// const assert = require('assert');
const help = require('./help');

describe('eslint-config-easy: basic', function () {
  it('should pass on the ok.js file', function () {
    help.fileShouldOk('ok.js');
  });
  it('should pass on the ok.vue file', function () {
    help.fileShouldOk('ok.vue');
  });

  // it('should fail on the error file', function(){
  //   const result = help.lint('basic-error')
  //   try{
  //     assert.equal(result.errorCount, 1);
  //     assert.equal(result.warningCount, 0);
  //   }catch(e){
  //     console.log(result);
  //     throw e;
  //   }
  // });
});
