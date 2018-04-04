'use strict';

let person1 = {
  name: 'Jeffrey',
  jobTitle: 'Boss',
};

let person2 = {
  name: 'Dameon',
  jobTitle: 'Dad',
};

let person3 = {
  name: 'Rich',
  jobTitle: 'Programmer',
};

let persons = [person1, person2, person3];
persons.forEach(person => console.log(`${person.name} is a ${person.jobTitle}`));