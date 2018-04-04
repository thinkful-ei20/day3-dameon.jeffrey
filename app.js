'use strict';

function createObject(){
  return {
    foo : 'bar',
    answerToUniverse : 42,
    'olly olly' : 'oxen free',
    sayHello : function() {
      return 'hello';
    }
  };
}


let obj = createObject();
//console.log(obj);
console.log(updateObject(obj));