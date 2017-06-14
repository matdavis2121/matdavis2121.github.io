/**
 * Part 2
 * 
 * In this file, we're going to create some 
 * Functions to work with our data created in
 * data.js.
 * 
 * See the README for detailed instructions, 
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals,name){
    
    for(var i = 0; i < animals.length ; i++){
        //name = name[0].toUpperCase() + name.slice(1).toLowerCase()
        if(animals[i].name === name){
            return animals[i];
        }
    } return null;
}
//COMPLETE 061317 - 02:43PM

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
       for(var i = 0; i < animals.length ; i++){
        name = name[0].toUpperCase() + name.slice(1).toLowerCase();
        if(animals[i].name === name){
            animals[i] = replacement;
            return animals[i];
        }
    } return null;
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
        for(var i = 0; i < animals.length ; i++){
        //name = name[0].toUpperCase() + name.slice(1).toLowerCase()
        if(animals[i].name === name){
            animals.splice(i,1);
            //return animals;
        }
    } return null;
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal){
    if(animal.name.length > 0 && animal.species.length > 0){
        for(var i = 0; i < animals.length; i++){
            if(animals[i].name.toLowerCase() !== animal.name.toLowerCase() && animals[i] === animals[animals.length -1]){
                return animals.push(animal);
            } else if(animals[i].name.toLowerCase() === animal.name.toLowerCase()) {
                return alert("This name is NOT unique. Please enter a unique Name.");
            }
                 
        }
    } else if(animal.name.length === 0 || animal.species.length === 0){
        alert("Please enter in a Name and Species.")
    }
}

/** 
 * You did it! You're all done with Matchy!
 */
 
 
 
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search;
    module.exports.replace = replace;
    module.exports.remove = remove;
    module.exports.add = add;
}