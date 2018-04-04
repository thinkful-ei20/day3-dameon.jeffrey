'use strict';

let person1 = {
  name: 'Jeffrey',
  jobTitle: 'Boss',
  
};

let person2 = {
  name: 'Dameon',
  jobTitle: 'Dad',
  boss: 'Jeffrey',
};

let person3 = {
  name: 'Rich',
  jobTitle: 'Programmer',
  boss: 'Dameon',
};

let persons = [person1, person2, person3];
persons.forEach(person => console.log(`${person.jobTitle} ${person.name} ${'boss' in person ? 'reports to ' + person.boss : 'reports to no one'}`));





