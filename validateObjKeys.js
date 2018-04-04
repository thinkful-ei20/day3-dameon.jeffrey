'use strict';

function validateKeys(object, expectedKeys) {
  if(Object.keys(object).length !== expectedKeys.length) {
    return false;
  }
  
  for(let i = 0; i < expectedKeys.length; i++) {
    if(!Object.keys(object).find(key => key === expectedKeys[i])) {
      return false;
    }
  }

  return true;
}


const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};
const expectedKeys = ['id', 'name', 'age', 'city'];

let resultA = validateKeys(objectA, expectedKeys);
console.log(resultA);
let resultB = validateKeys(objectB, expectedKeys);
console.log(resultB);