
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

//if myList[i].friends[0] === undefined notFriends.push(myList[i].name)
function nonFriends(name, myList){
    var notFriends = [];

    for(var i = 0; i < myList.length; i++){
        for(var j = 0; j < myList[i].friends.length;j++){
            if(myList[i].friends)
            
            
            if(name === myList[i].name){
                continue
            } else if(name !== myList[i].friends[j] && myList[i].friends[j] === myList[i].friends[myList[i].friends.length -1]){
                notFriends.push(myList[i].name);
            }
        }
        
    } return notFriends;
}

//PROBLEM 14 - 1:04AM
//PROBLEM 14 - 1:04AM
//PROBLEM 14 - 1:04AM
