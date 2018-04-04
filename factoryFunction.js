'use strict';

function createCharacter(name,nickname,race,origin,attack,defense, weapon){
  return  {
    name:name,
    nickname: nickname,
    race : race,
    origin : origin,
    attack : attack,
    defense : defense,
    weapon: weapon,
    describe: function(){
      return `${this.name} is a ${this.race} from ${this.origin} and uses ${weapon}`;
    },
    evaluateFight : function(character){
      let oppDmg = character.defense > this.attack ? 0 :  this.attack - character.defense ;
      let myDmg = this.defense > character.attack ? 0 : character.attack - this.defense;
      return `Your opponent takes ${oppDmg} damage and you receive ${myDmg} damage`;
    }
  };
}




let characters = [
  createCharacter('bilbo','baggins','Hobbit','the shire',2,1, 'Ring'),
  createCharacter('Gandalf the White','gandalf','Wizard','Middle Earth',10,6, 'Wizard Staff'),
  createCharacter('Frodo Baggins','frodo','Hobbit','The Shire',3,2, 'String and Barrow Blade'),
  createCharacter('Aragonrn son of Arathorn','aragorn','Man','Dunnedain',6,8, 'Anduril'),
  createCharacter('Legolas','legolas','Elf','Woodland Realm',8,5, 'Bow and Arrow')];




characters.push(createCharacter('dameon','mendoza','human','earth',100,100, 'fists'));
let foundChar = characters.find(function(character){
  return  character.nickname === 'aragorn';
});

console.log(foundChar.describe());

let hobbits = characters.filter(character => character.race === 'Hobbit');
//console.log(hobbits);

let attackers = characters.filter(character => character.attack > 5);
//console.log(attackers);




// Write a factory function called createCharacter (review in this assignment) that could appropriately build characters from LOTR that have the following attributes:
// ===============================================================================================
// | Name                      | Nickname    | Race       | Origin         | Attack   | Defense  |
// -----------------------------------------------------------------------------------------------
// | Gandalf the White         | gandalf     | Wizard     | Middle Earth   | 10       | 6        |
// -----------------------------------------------------------------------------------------------
// | Bilbo Baggins             | bilbo       | Hobbit     | The Shire      | 2        | 1        |
// -----------------------------------------------------------------------------------------------
// | Frodo Baggins             | frodo       | Hobbit     | The Shire      | 3        | 2        |
// -----------------------------------------------------------------------------------------------
// | Aragorn son of Arathorn   | aragorn     | Man        | Dunnedain      | 6        | 8        |
// -----------------------------------------------------------------------------------------------
// | Legolas                   | legolas     | Elf        | Woodland Realm | 8        | 5        |
// -----------------------------------------------------------------------------------------------
// Each character should have the method describe which takes no parameters and prints out the string: 
//"{name} is a {race} from {origin}."

// Each character should also have a method called evaluateFight
// that takes in a character object and returns the following string: 
//"Your opponent takes {x} damage and you receive {y} damage" where x and y are the differences between each characters attack and defense values. If defense exceeds attack, then take zero damage.

// Using array literal syntax, 
//create an array characters that calls your factory function for each character in the
// table above with the relevant parameters. Your characters array should now have 5 objects in it.

// Add a new character to characters (make up any attributes not provided):

// Arwen Undomiel is a Half-Elf of Rivendell
// Using the .find() function, retrieve your character
// nicknamed aragorn from characters and then call his describe method.

// Using the .filter() function, create a new array from characters that ONLY contains characters of the race Hobbit.

// Using the .filter() function, create a new array from characters that ONLY contains characters with attack value above 5.

// What if you wanted to equip a weapon for each character and change how they are described? For example:

// Gandolf the White is a Wizard of the Middle Earth who uses a wizard staff
// Bilbo Baggings is a Hobbit of the Shire who uses the Ring
// Frodo ... String and Barrow Blade
// Aragon .... Anduril
// Legolas ... Bow and Arrow
// Arwen .... Hadhafang
// How would you change the factory function and other methods?






