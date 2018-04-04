'use strict';

function enrollInSummerSchool(students) {
  for(let i = 0; i < students.length; i++) {
    students[i].status = 'In Summer school';
  }
  return students;
}

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

let output = enrollInSummerSchool(studentData);
console.log(output);