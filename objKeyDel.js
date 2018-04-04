'use strict';

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;

  return obj;
}

let oldObj = {
  foo: 'foo',
  bar: 'bar',
  test: 'test',
};

console.log(oldObj);
let newObj = keyDeleter(oldObj);
console.log(newObj);