
// const assert = require('assert');
const help = require('./help');

describe('eslint-config-easy: basic', function () {
  it('should pass on the ok file', function () {
    help.fileShouldOk('ok');
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
