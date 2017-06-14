/** 
 * Part 1
 * 
 * In this file, we're going to practice 
 * creating and accessing data structues.
 * 
 * See the README for detailed instructions, 
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "lion";
animal["name"] = "Roarie";
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
//STEP 1
noises = ["ROAAAARRR"];
noises.push("MEOW");
noises.unshift("Super ROAR");
//STEP 7
noises[noises.length] = "Purrrr";
console.log(noises.length);
console.log(noises.length - 1);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

noises[noises.length] = "Giraffe";
noises[noises.length] = animal.noises;
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *    You can use the push method to push an element
      You can use bracket notation by using the .length property to access the newest, unused Array index
 * 2. What are the different ways of accessing elements on arrays?
 *    You can use the index based method or even loop thru all the indexes
 * *******************************************************************
 */

/* ******************************************************************* 
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself 
 * a rest when you can! Grab a drink and have a think! 
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
//STEP 5
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }
animals.push(duck)
console.log(animals)
var falcon = { species: 'falcon', name: 'Falkie', noises: ['kaww', 'screams', 'hisses', 'snores'] } 
var zebra = { species: 'zebra', name: 'Zed', noises: ['sighs', 'huffs', 'puffs', 'kisses'] }
animals.push(falcon, zebra)
//LAST STEP OF STEP6
console.log(animals, animals.length)
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = [];
function randomFriend(){
    return animals[Math.floor(Math.random() * animals.length)].name;
}
 friends.push(randomFriend());
 console.log(friends);
 
 duck.friends = friends;
 console.log(animals);
 //COMPLETED AT 061317 - 02:26PM
 
/** 
 * Nice work! You're done Part 1. Pat yourself on the back and 
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.animal = animal;
    module.exports.noises = noises;
    module.exports.animals = animals;
    module.exports.friends = friends;
    module.exports.getRandom = getRandom;
}
