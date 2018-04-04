'use strict';

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};

function decode(word) {
  let character = word[0];
  return word[0] in cipher ? word[cipher[character] - 1] : ' ';  
}

function decodeWords(sentence) {
  let result = '';
  sentence.split(' ').forEach(word => result += decode(word));

  return result;
}

let input = 'craft block argon meter bells brown croon droop';
let output = decodeWords(input);
console.log(output);