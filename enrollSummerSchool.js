'use strict';

function enrollInSummerSchool(students) {
  const results = [];
  for(let i = 0; i < students.length; i++) {
    results.push({
      name: students[i].name,
      status: 'In Summer school',
      course: students[i].course
    });
  }
  return results;
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