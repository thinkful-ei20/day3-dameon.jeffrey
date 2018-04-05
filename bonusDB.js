'use strict';

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
  let result = arr.find(function(obj) {
    for(let key in query) {
      if (obj[key] !== query[key])
        return false;
    }
    return true;
  });

  if(result == null)
    return null;

  return result;
}

// console.log(findOne(HEROES, { id: 1 }));
// console.log(findOne(HEROES, { id: 10 }));
// console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
// console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
// console.log(findOne(HEROES, { squad: 'Justice League' }));




const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne : function(query){
    let newArr = this.store.heroes;
    let result = newArr.find(function(obj) {
      for(let key in query) {
        if (obj[key] !== query[key])
          return false;
      }
      return true;
    });

    if(result == null)
      return null;

    return result;
  },
};
// console.log(Database);
// console.log(Database.log(Database.store.heroes));
// console.log(Database.store.heroes);
console.log(Database.findOne({id:2}));
console.log(Database.findOne( { id: 1 }));
console.log(Database.findOne( { id: 10 }));
console.log(Database.findOne( { id: 2, name: 'Aquaman' }));
console.log(Database.findOne( { id: 5, squad: 'Justice League' }));
console.log(Database.findOne( { squad: 'Justice League' }));