'use strict';

let obj = {
  foo: 'oof',
  bar: 'rab',
  fum: 'muf',
  quux: 'xuuq',
  spam: 'maps',
};

for(let o in obj)
{
  console.log(`Property: ${o}`);
  console.log(`Value: ${obj[o]}`);
}