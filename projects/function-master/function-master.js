
/* ------------2ND TIME PERFORMING FUNCTION MASTER-------------*/
        /* ---START---------06/18/2017 18:02:01------------*/
        /* ---COMPLETED-----06/18/2017 19:34:51------------*/

// //PROBLEM 13 - 12:57AM
// function objectValues(object){
//     var array1 = [];
//     for(var key in object){
//         array1.push(object[key]);
//     } return array1;
// }

function objectValues(object){
    var obValues = []
    for(var key in object){
        obValues.push(object[key])
    } return obValues
}


// //PROBLEM 14 - 1:04AM
// function keysToString(object){
//     var array2 = [];
//     for(var key in object){
//         array2.push(key);
//     } return array2.join(" ");
// }

function keysToString(object){
    var keyArray = [];
    for(var key in object){
        keyArray.push(key)
    } return keyArray.join(" ")
}

// //PROBLEM 15 - 1:08AM
// function valuesToString(object){
//     var array3 = [];
//     for(var key in object){
//         if(typeof object[key] === "string"){
//             array3.push(object[key])
//         }
//     } return array3.join(" ")
// }

function valuesToString(object){
    var valArray = [];
    for(var key in object){
        if(typeof object[key] === "string"){
            valArray.push(object[key]);
        }
    } return valArray.join(" ")
}

// //PROBLEM 16 - 1:11AM
// function arrayOrObject(arg){
//     if(Array.isArray(arg)){
//         return "array"
//     } else {
//         return "object"
//     }
// }

//PASSED but in the future, account for NOT array AND NOT object
function arrayOrObject(arg){
    if(Array.isArray(arg)){
        return "array"
    } else {
        return "object"
    }
}


// //PROBLEM 17 - 1:15AM
// function capitalizeWord(string){
//     return string[0].toUpperCase() + "" + string.slice(1)
// }

function capitalizeWord(string){
    return string[0].toUpperCase() + string.slice(1).toLowerCase()
}

// //PROBLEM 18 - 1:58AM
// //Gave me a hard time due to extra space after last word
// function capitalizeAllWords(string){
// var subStrings = string.split(" ");
// var upperString = "";
// var finishedString = "";
//     for(var i = 0; i < subStrings.length; i++){
//         if(subStrings[i]) {
//         upperString = subStrings[i][0].toUpperCase() + subStrings[i].slice(1) + " ";
//         finishedString += upperString;
//         }
//     } return finishedString.trim()
// }

//Needed to be return as string, separated by a space even though not mentioned
function capitalizeAllWords(string){
    var allWordsArr = string.split(" ")
    var allCapsArr = [];
    for(var i = 0; i < allWordsArr.length; i++ ){
        allCapsArr.push(allWordsArr[i][0].toUpperCase() + 
                        allWordsArr[i].slice(1).toLowerCase())
        
    } return allCapsArr.join(" ")
}

// //PROBLEM 19 - 2:19AM
// //Required both names to have 1st letter capitalized
// function welcomeMessage(object){
//     if(object.name){
//     return "Welcome " + object.name[0].toUpperCase() + object.name.slice(1) + "!";
//     }
// }

//Only able to access 0 index(1st letter) bc name property is just a string
function welcomeMessage(object){
    var obName = object.name[0].toUpperCase() + object.name.slice(1).toLowerCase()
    return "Welcome " + obName + "!"
}

// //PROBLEM 20 - 2:24amAM
// function profileInfo(object){
//     if(object.name && object.species){
//     return object.name[0].toUpperCase() + object.name.slice(1) + " is a " + 
//     object.species[0].toUpperCase() + object.species.slice(1);
//     }
// }

function profileInfo(object){
    var obName = object.name[0].toUpperCase() + object.name.slice(1).toLowerCase()
    var obSpecies = object.species[0].toUpperCase() + object.species.slice(1).toLowerCase()
    return obName + " is a " + obSpecies    
}

// //PROBLEM 21 - 02:51AM
// //struggled on accommodating for the empty array
// function maybeNoises(object){
//     if(Array.isArray(object.noises) && object.noises[0] !== undefined){
//         return object.noises.join(" ");
//     } return "there are no noises";
// }

//Used BANGS but still hard to clarify
//Technically looks for FALSE as initial control flow VS. TRUE as initial
//if a == true AKA if(a) \\VS// if a == false AKA if(!a)
/* BANG = if this equates to FALSE then do this, else if it's TRUE do this*/
function maybeNoises(object){
    if(!Array.isArray(object.noises) || !object.noises[0] ){
        return "there are no noises"
    } else if(Array.isArray(object.noises)){
        return object.noises.join(" ")
    }
}

// //PROBLEM 22 - 2:58AM
// function hasWord(string1, word1){
//      if(string1.indexOf(word1) > -1){
//          return true;
//      } else {
//          return false;
//      }
// }

function hasWord(string, word){
    if(string.indexOf(word) !== -1){
        return true
    } return false
}

// //PROBLEM 23 - 0300AM
// function addFriend(name, object){
//     object.friends.push(name);
//     return object;
// }

function addFriend(name, object){
    object.friends.push(name);
    return object
} 

// //PROBLEM 24 - 03:38AM
// //ran into big trouble on this
// //**very simple mistake, allowed the 1st index to determine the logic
// //**after the 1st comparison was false, it defaulted to return to false each time
// function isFriend(name, object){
//     if(object.friends !== undefined){
//         for(var i = 0; i < object.friends.length; i++){
//             if(object.friends[i] === name){
//                 return true;
//             } else {
//                 continue;
//             }
//         }
//     } return false 
// }

//When using forEach, it performs actions but doesn't RETURN
function isFriend(name, object){
    //var checkName = name
    var result = false
    //Cannot read property [0] of undefined for empty object
    if (object.friends === undefined) {
        return result
    } else if(object.friends[0] !== undefined){
        object.friends.forEach(friendCheck)
    } return result
    
    //ARRAY.FOREACH(FUNCTION)
    function friendCheck(friend,index){
        if(friend === name){
            result = true
        }
    }
}


//PROBLEM 25 - 061417 - 02:05PM

bob has no friends
some only have 1 friend
some have 2 friends

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


// //Still the most difficult of them all - ALOT to account for
// function nonFriends(name, List){
//     var allNonFriends = []
//     List.forEach(friendCheck)
//     return allNonFriends
    
//     // FOR EACH FUNCTION
//     function friendCheck(element, index){
//         if(element.name === name) {
//             //DO NOTHING
//         } else if(element.friends[0] === undefined ){
//             allNonFriends.push(element.name)
//         } else {
//             for(var i = 0; i < element.friends.length; i++){
//                 if(element.friends[i] === name){
//                     break;
//                 } else if(element.friends[i] !== name && 
//                   element.friends[i] === element.friends[element.friends.length -1]){
//                     allNonFriends.push(element.name)
//                 }
//             }
//         }
//     } // End of FOR EACH FUNCTION
// } // End of TOP LEVEL FUNCTION

/* 06/20/2017 02:58:31 -- DOPE SOLUTION using only higher order function*/
function nonFriends(name, List){
    var allNonFriends = []
    List.forEach(pushNonFriends)
    return allNonFriends
    
    // 1st FOR EACH FUNCTION
    function pushNonFriends(element, index){
        if(element.name === name) {
            //DO NOTHING
        } else if(!element.friends.some(isFriendCheck)){
                allNonFriends.push(element.name)
        }
    }//1st-end
        
    //2nd FOR EACH- use some() to test if name exist
    //if name DOES NOT EXIST, false is returned and we add that name to NONfriends
    function isFriendCheck(friend, index){
        return name === friend
    } //2nd-end
            
} // End of TOP LEVEL FUNCTION

// //PROBLEM 26 - 061417 - 0903PM
// //Issue again with needing to close .js & forgot to use FUNCTION keyword
// //Otherwise, pretty easy problem
// function updateObject(object, mKey, mValue){
//       object[mKey] = mValue;
//       return object
// } 

//Forgot to return
function updateObject(object, mkey, mval){
    object[mkey] = mval
    return object
}

//PROBLEM 27 - 9:45pm
//TOUGH ONE! - NEEDED TO FIGURE OUT HOW FOR LOOPS WORK INSIDE EACH OTHER
/* 2 FOR loops is fine but For loops with FOR IN loops is trouble*/
// function removeProperties(object, stringArray){
//     var testArray = [];
//     for(var key in object){
//         testArray.push(key)
//     }
//     for(var i = 0; i < stringArray.length; i++){
//         for(var j = 0; j < testArray.length; j++){
//             if(stringArray[i] === testArray[j]){
//                 delete object[testArray[j]];
//             }
//         }
//     } return object
// }

function removeProperties(object, strArray){
    strArray.forEach(removeTest)
    return object
    
    //FOR EACH FUNCTION
    function removeTest(element, index){
        for( var key  in object){
            if(key === element){
                delete object[key]
            }
        }
    }
}


// //PROBLEM 28 - 061417 - 11:03pm
// /*SUCCESS!! - REQUIRED
//     1. new REGEX
//     2. array.indexOf as well as array.join
//     3. string.match(RegEx).length --- this equals # of occurences
//     4. array.push()
//  */
// function dedup(array){
// var newArray = [];
// var oneLongString = array.join(" ");
//     for(var i = 0 ; i < array.length; i++){
//     var re = new RegExp(array[i], "g");
//     //If length = 1 then there's only 1 occurence of the string in the string
//         if(oneLongString.match(re).length === 1){
//             newArray.push(array[i]);
//     //If more than one occurence and the i === the 1st indexOf that string then PUSH            
//         } else if(oneLongString.match(re).length > 1 && i === array.indexOf(array[i]) ){
//             newArray.push(array[i]);            
//         }
//     } return newArray;
// }


function dedup(array){
    var nonDups = [];
    array.forEach(dupCheck);
    return nonDups;
    
    //FOR EACH FUNCTION
    function dupCheck(val, index){
        if(array.indexOf(val) === index){
            nonDups.push(val);
        }
    } //FOR EACH FUNCTION
    
}

