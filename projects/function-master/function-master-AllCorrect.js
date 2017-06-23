
//PROBLEM 13 - 12:57AM
function objectValues(object){
    var array1 = [];
    for(var key in object){
        array1.push(object[key]);
    } return array1;
}

//PROBLEM 14 - 1:04AM
function keysToString(object){
    var array2 = [];
    for(var key in object){
        array2.push(key);
    } return array2.join(" ");
}

//PROBLEM 15 - 1:08AM
function valuesToString(object){
    var array3 = [];
    for(var key in object){
        if(typeof object[key] === "string"){
            array3.push(object[key])
        }
    } return array3.join(" ")
}


//PROBLEM 16 - 1:11AM
function arrayOrObject(arg){
    if(Array.isArray(arg)){
        return "array"
    } else {
        return "object"
    }
}

//PROBLEM 17 - 1:15AM
function capitalizeWord(string){
    return string[0].toUpperCase() + "" + string.slice(1)
}

//PROBLEM 18 - 1:58AM
//Gave me a hard time due to extra space after last word
function capitalizeAllWords(string){
var subStrings = string.split(" ");
var upperString = "";
var finishedString = "";
    for(var i = 0; i < subStrings.length; i++){
        if(subStrings[i]) {
        upperString = subStrings[i][0].toUpperCase() + subStrings[i].slice(1) + " ";
        finishedString += upperString;
        }
    } return finishedString.trim()
}

//PROBLEM 19 - 2:19AM
//Required both names to have 1st letter capitalized
function welcomeMessage(object){
    if(object.name){
    return "Welcome " + object.name[0].toUpperCase() + object.name.slice(1) + "!";
    }
}

//PROBLEM 20 - 2:24amAM
function profileInfo(object){
    if(object.name && object.species){
    return object.name[0].toUpperCase() + object.name.slice(1) + " is a " + 
    object.species[0].toUpperCase() + object.species.slice(1);
    }
}

//PROBLEM 21 - 02:51AM
//struggled on accommodating for the empty array
function maybeNoises(object){
    if(Array.isArray(object.noises) && object.noises[0] !== undefined){
        return object.noises.join(" ");
    } return "there are no noises";
}

//PROBLEM 22 - 2:58AM
function hasWord(string1, word1){
     if(string1.indexOf(word1) > -1){
         return true;
     } else {
         return false;
     }
}

//PROBLEM 23 - 0300AM
function addFriend(name, object){
    object.friends.push(name);
    return object;
}
//PROBLEM 24 - 03:38AM
//ran into big trouble on this
//**very simple mistake, allowed the 1st index to determine the logic
//**after the 1st comparison was false, it defaulted to return to false each time
function isFriend(name, object){
    if(object.friends !== undefined){
        for(var i = 0; i < object.friends.length; i++){
            if(object.friends[i] === name){
                return true;
            } else {
                continue;
            }
        }
    } return false 
}

//PROBLEM 25 - 061417 - 02:05PM
function nonFriends(name, myList){
    var notFriends = [];
    for(var i = 0; i < myList.length; i++){
        /* If the person we're searching has no friends AND*/
        /* If the person who has no friends !== name then, add them to NOTFRIENDS*/
        if(myList[i].friends[0] === undefined && name !== myList[i].name){
            notFriends.push(myList[i].name);
        } else {
            for(var j = 0; j < myList[i].friends.length;j++){
                /* If name and the person who friends we're searching match, CONTINUE*/
                /* If name === a friend's name then break the loop */
                if(name === myList[i].name || name === myList[i].friends[j]){
                    break;
                } else if(name !== myList[i].friends[j] && myList[i].friends[j] === myList[i].friends[myList[i].friends.length -1]){
                    notFriends.push(myList[i].name);
                } else if(name !== myList[i].friends[j]){
                    continue;
                }
            }
        }
    } return notFriends;      
} 

//PROBLEM 26 - 061417 - 0903PM
//Issue again with needing to close .js & forgot to use FUNCTION keyword
//Otherwise, pretty easy problem
function updateObject(object, mKey, mValue){
      object[mKey] = mValue;
      return object
} 

//PROBLEM 27 - 9:45pm
//TOUGH ONE! - NEEDED TO FIGURE OUT HOW FOR LOOPS WORK INSIDE EACH OTHER
/* 2 FOR loops is fine but For loops with FOR IN loops is trouble*/
function removeProperties(object, stringArray){
    var testArray = [];
    for(var key in object){
        testArray.push(key)
    }
    for(var i = 0; i < stringArray.length; i++){
        for(var j = 0; j < testArray.length; j++){
            if(stringArray[i] === testArray[j]){
                delete object[testArray[j]];
            }
        }
    } return object
}

//PROBLEM 28 - 061417 - 11:03pm
/*SUCCESS!! - REQUIRED
    1. new REGEX
    2. array.indexOf as well as array.join
    3. string.match(RegEx).length --- this equals # of occurences
    4. array.push()
 */
function dedup(array){
var newArray = [];
var oneLongString = array.join(" ");
    for(var i = 0 ; i < array.length; i++){
    var re = new RegExp(array[i], "g");
    //If length = 1 then there's only 1 occurence of the string in the string
        if(oneLongString.match(re).length === 1){
            newArray.push(array[i]);
    //If more than one occurence and the i === the 1st indexOf that string then PUSH            
        } else if(oneLongString.match(re).length > 1 && i === array.indexOf(array[i]) ){
            newArray.push(array[i]);            
        }
    } return newArray;
}


