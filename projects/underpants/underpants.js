// This is the proper way to start a javascript library
(function() {

// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// This allows us to use our "_" anywhere. In a web browser, properties of window
// are available everywhere without having to type "window."
/* global _ */
window._ = {};

/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity()
* Arguments:
*   1) Anything
* Objectives:
*   1) Returns <anything> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

/*----------NUMBER 1----------*/
//TOUGH START!!! - HARD to realize that _ = an object and identity = a property
    _.identity = function(x){
    return x
    }

/** _.typeOf()
* Arguments:
*   1) Anything
* Objectives:
*   1) Return the type of <anything> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

/*----------NUMBER 2----------*/
_.typeOf = function(x){
    if(Array.isArray(x)){
        return "array"
    } else if (x === null){
        return "null"
    } else if(x instanceof Date){
        return "date"
    } else {
        return typeof x
    }
}


/** _.first()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first(["a","b","c"], 1) -> "a"
*   _.first(["a","b","c"], 2) -> ["a", "b"]
*   _.first(["a", "b", "c"], "ponies") -> ["a","b","c"]
*/
          /*----------NUMBER 3----------*/
     /*------------06/19/2017 02:57:23-------*/
_.first = function(arr, num){
    if(!Array.isArray(arr) || num < 0){
        return []
    } else if(num === undefined || isNaN(num)){
        return arr[0]
    } else if(num) {
        return arr.slice(0, num)
    }
}

/** _.last()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Gotchas:
*   1) What if <nubmer> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last(["a","b","c"], 2) -> ["b","c"]
*   _.last(["a", "b", "c"], "ponies") -> ["a","b","c"]
*/

        /*----------NUMBER 4----------*/
    /*------------06/19/2017 04:26:22-------*/
_.last = function(arr, num){
    if(!Array.isArray(arr) || num < 0){
        return [];
    } else if(num === undefined || isNaN(num)){
        return arr[arr.length -1];
    } else if(num > arr.length){
        return arr;
    } else {
        return arr.slice(num -1);
    }
}
/** _.each()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
        /*----------NUMBER 4----------*/
    /*------------06/19/2017 04:26:22-------*/
//Make my own version to better understand process
_.each = function(coll, fun){
    var objArr = [];
    
    if(Array.isArray(coll)){
        for(var i = 0; i < coll.length; i++){
            fun(coll[i], i, coll)
        }
    } else if(typeof coll === "object"){
        for(var key in coll){
            fun(coll[key], key, coll)
        }
    }
}    


/** _.indexOf()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Gotchas:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
//DONT USE INDEX OF
"06/20/2017 03:24:28"

/*_.indexOf = function(arr, val){
    for(var i = 0; i <arr.length ; i++){
        if(arr[i] === val){ return i}
    } return -1
}*/

"06/22/2017 00:23:42"
_.indexOf = function(arr, v){
var iArr = [];    
    _.each(arr, function(e, i, arr){
        if(e === v){
            iArr.push(i);
        } 
    });
    
/*    returns index of all matches
    console.log(iArr)*/
    //had to update to !== undefined or
    //every 0 index would equate to false
    if(iArr[0] !== undefined){
        return iArr[0]
    } else {
        return -1
    }
}


/** _.filter()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Gotchas:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

/* WITHOUT _.EACH*/
// _.filter = function(arr, func){
//     var newArr = []
//     for(var i = 0; i < arr.length; i++){
//         if(func(arr[i], i, arr)){
//             newArr.push(arr[i])
//         }
//     } return newArr
// }

/* WITH _.EACH - 06/20/2017 03:51:27*/
_.filter = function(arr, func){
    var newArr = [];
    _.each(arr, function(val, i, eArr){
        if(func(val, i, eArr)){
            newArr.push(val)
        }
    }) 
    return newArr
}

/** _.reject()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
"06/20/2017 04:12:32"
_.reject = function(arr, func){
    var newArr = [];
    
    _.filter(arr, function(val, i, array){
        if(!func(val, i, array)){
            newArr.push(val);
        }
    });
    return newArr;
};

/** _.partition()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Gotchas:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
"COMPLETE - 06/20/2017 19:42:29"
_.partition = function(array, func){
    var subArr1 = [];
    var subArr2 = [];
    var finalArray = [];
    for(var i = 0; i < array.length; i++){
        //THIS IS ALL: that is needed when making the FUNCTION AS PARAM definition
        //func(val, i, array) = a function that returns a value
        if(func(array[i], i, array)){
            subArr1.push(array[i])
        } else {
            subArr2.push(array[i])
        }
    } 
    finalArray.push(subArr1)
    finalArray.push(subArr2)
    return finalArray
}


/** _.unique()
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
//ANSWER 1: USING FOR LOOP
// _.unique = function(array){
//     var newArr = []
//     for(var i = 0; i < array.length; i++ ){
//         if(array.indexOf(array[i]) === i){
//             newArr.push(array[i])
//         }
//     } return newArr
// }

//ANSWER 2: USING _.identity
/*_.unique = function(array){
    var newArr = []
    for(var i = 0; i < array.length; i++ ){
        if(_.indexOf(array, array[i]) === i){
            newArr.push(array[i])
        }
    } return newArr
}*/

//ANSWER 3: USING EACH
_.unique = function(array){
    var newArr = [];
    //USES: _.each and an anonymous function
    //
    _.each(array, function(val, i, array){
        if(_.indexOf(array, val) === i){
            newArr.push(val)
        }
    })
    return newArr
}


/** _.map()
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

/*_.map = function(coll, func){
    
    var newArr = [];
    if(Array.isArray(coll)){
        for(var i = 0; i < coll.length; i++){
            if(func(coll[i], i, coll)){
                newArr.push(func(coll[i], i, coll)) 
            }
        }
    } else if (typeof coll === "object"){
      for(var key in coll){
          if(func(coll[key], key, coll)){
              newArr.push(func(coll[key], key, coll))
          }
      }
    } return newArr
        
}*/

"ANSWER 2: USING _.EACH - 06/21/2017 03:55:06"
_.map = function(coll, func){
    var newArr = [];

        _.each(coll, function(val, i, arr){
            if(val){
                newArr.push(func(val, i, arr))
            }
        });
    return newArr
}


/** _.pluck()
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
 
 //SUPER TRICKY!! - This one involves returning the function _.map
 //06/21/2017 04:33:02
 _.pluck = function(arrayofObjs, property){
    return _.map(arrayofObjs, function(eachObject){
             return eachObject[property]
     })
 }

/** _.contains()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Gotchas:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

//REAL TROUBLE!! - TERNARY CAN ONLY COMPARE TO A LITERAL VALUE, NOT A VARIABLE
// _.contains = function(array, valArg){
//     var valExist = false
//         for(var i = 0; i < array.length; i++){
//             if(valArg === array[i]){
//                 valExist = true
//             }
//         }
//         return (valExist === true) ? true : false
// }

// 2ND ANSWER: USING FOR EACH
_.contains = function(array, valArg){
    var valExist
        _.each(array, function(val){
            if(val === valArg){
                valExist = true
            }
        })
        return (valExist === true) ? true : false
}

/** _.every()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/


_.every = function(c, f){
//1. ARE elements all true? - Run _.each and set to false if even ONE is false
//ELSE they're all true
var noFunctionBoolean = true
_.each(c, function(x){if(!x){noFunctionBoolean = false}})

//2. NO FUNCTION CHECK - control flow
if(typeof f !== "function" && noFunctionBoolean === true){return true} 
else if (typeof f !== "function" && noFunctionBoolean === false){return false}    

//3. RUN Function Argument on every element
var truetest = false
var falsetest = true
    _.each(c, function(v, i, c){
        if(!f(v, i, c)){falsetest = false} 
        else {truetest = true}
    })

//4. BOOLEAN RESULTS
//What to return based off running the function on each element    
    if (!falsetest) {return false} 
    else if(truetest) {return true}
} //FUNCTION END*/


/** _.some()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(c, f){
//1. ARE elements all true? - Run _.each and set to false if even ONE is false
//ELSE they're all true
var noFunctionBoolean = false

//SOME-now testing for if x === true
_.each(c, function(x){if(x){noFunctionBoolean = true}})

//2. NO FUNCTION CHECK - control flow
if(typeof f !== "function" && noFunctionBoolean === true){return true} 
else if (typeof f !== "function" && noFunctionBoolean === false){return false}    

//3. RUN Function Argument on every element
var truetest = false
var falsetest = true
    _.each(c, function(v, i, c){
        if(!f(v, i, c)){falsetest = false} 
        else {truetest = true}
    })

//4. BOOLEAN RESULTS
//What to return based off running the function on each element    
//SOME same as EVERY except flipped the truetest and falsetest below
    if(truetest) {return true}
    else if(!falsetest) {return false} 
} //FUNCTION END*/


/** _.reduce()
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed>
*   5) After the last iteration, return the return value of the final <function> call
* Gotchas:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, f, seed){
var previous 
var seedExist = true
    if(seed || seed !== undefined){previous = seed } 
    else if(!seed){previous = array[0]; seedExist = false}
    
    _.each(array, function(v, i, a){
        if(i > 0 || seedExist){previous = f(previous, v, i)}
    })
    return previous
}


/** _.extend()
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
    "06/22/2017 23:16:44"
_.extend = function(parentOb, o2){

      _.each(arguments, function(obj, index, args){
        if(index > 0){
            _.each(obj, function(v, k, o) { parentOb[k] = v })}
      })
    return parentOb
}



// This is the proper way to end a javascript library
}());
