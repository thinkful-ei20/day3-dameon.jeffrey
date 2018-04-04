'use strict';


// This function takes 2 arguments, items and idNum.
//  items is an array of objects. 
// idNum is the id we're trying to find in items. 
// The function should look for an item with the id idNum in the array items. 
// If found, it should return that item.

function findById(items,idNum){
  return items.find(item => item.id === idNum);
}
const data = [{id: 1, foo: 'bar'}, {id: 2, foo: 'bizz'}];
let ex = findById(data,1);
console.log(ex);