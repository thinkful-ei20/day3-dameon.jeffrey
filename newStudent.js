'use strict';

// Take up to 10 minutes to write a function called makeStudentReport that takes a single argument, data.
//  data is an array of objects.
//   Each object in the array represents a student and their letter grade for a course — for example, {name: 'Johnny Robot', grade: 'C'}.

// makeStudentReport should return an array of strings.
//  For each item in data, return a string that looks like this: '[name]: [grade]'. 
//  The name and grade values on the student object should be substituted in.


function makeStudentReport(data){
  let arr = [];
  for (let i = 0; i < data.length; i++){
    arr.push(`${data[i].name}: ${data[i].grade}`);
  }
  return arr;
}
const testData = [ { name: 'Jane Doe', grade: 'A' }, { name: 'John Dough', grade: 'B' }, { name: 'Jill Do', grade: 'A' }, ];
let result = makeStudentReport(testData);
console.log(result);
console.log(makeStudentReport(testData));
