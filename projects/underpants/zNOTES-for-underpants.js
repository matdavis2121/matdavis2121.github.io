                      "06/21/2017 17:42:41"
/* --------------------NOTES ON UNDERPANTS-------------------*/
//0. TESTING YOUR FUNCTION USING IMMEDIATE WINDOW OR JSBIN
    a. To test your functions in the Immediate Window or JSBIN
        1a. declare var _ = {}
        1b. then copy and paste your function and declare it
        1c. then call your function by for ex >> _.typeOf(arg1)
        1d. Using the test data on the backend, this allows for
            UNDERSTANDING and CLARITY as to what your code is actually doing
        1e. Being able to read the error messages provide by Underpants.html
            will help a lot too

/*1. _.IDENTITY*/
    a. passes ONE ARGUMENT(ANYTHING) then returns that argument
    
    
/*2. _.TYPEOF*/
    0. takes ONE ARGUMENT and returns its type as a "string"
    a. checks for the 3 partially true data types 1st
        -Array  using Array.isArray()       //if true, returns "array"
        -null   using strict equal          //if true, returns "null"
        -Date   using instanceof Date       //if true, returns "date"
    b. uses typeof for every other datatype
    
    
    
/*3. _.FIRST = takes the first <NUMBER> elements from <ARRAY> */
    //if <NUMBER> = 2, the 1st 2 elements of a 5 element array should be returned
                **_.First([1,2,3,4,5]) returns >> [1,2]**
    a. takes an ARRAY and NUMBER as arguments
    b. IF
        1b. array arg IS NOT array OR number < 0 
            return []
    c. ELSE IF
        1c. number STRICTLY EQUALS UNDEFINED OR isNaN(number)
            return array[0] >> the 1st element
    d. ELSE IF(number)
        1d. use number arg as a condition to test true or false 
        2d. when true, return array.slice(0, number)
        3d. this returns an array, starting at 0, up to the number argument
        4d. this new array will only return the amount of elements 
            determined by the NUMBER argument
    e. <------------------BACKGROUND TESTS TO PASS-------->
    _.first(["a","b","c"])      = "a"           //NO number argument
    _.first(["a","b","c"],2)    = ["a","b"]     //number = 2
    _.first(["a","b","c"], -1)  = []            //number < 0
    _.first(["a","b","c"], 5)   = ["a","b","c"] //number > array.length
    _.first({a:"b"}, 2),        = []            //array argument is an OBJECT



/*4. _.LAST = takes the last <NUMBER> of elements from <ARRAY>*/
//if <NUMBER> = 2, the last 2 elements of a 5 element array should be returned
                    **_.Last([1,2,3,4,5]) returns >> [4,5]**
    a. takes an ARRAY and NUMBER as arguments
    b. IF
        1b. array IS NOT an array OR number < 0
            return []
    c. ELSE IF
        1c. number STRICTLY EQUALS UNDEFINED or isNaN(number)
            return arr[arr.length - 1] >> the last element
    d. ELSE IF
        1d. number > array.length
            return array >> entire array
    e. ELSE
        1e. return array.slice(num - 1)
        2e. slice() takes 2 args 
            arg1 = starting index   = [10,11,12,13].slice(0,1)  = [10]
            arg2 = stopping index   = [5,6,7,8].slice(0,2)      = [5,6]
        2e. this expression ensures we START at the index provided by
            the number arg then allows all elements after that index to be returned
        3e. (- 1) is needed due to arrays being 0 indexed
        4e. this allows for the number arg to determine how many elements
            from the end of the array to return as a new array
    f. <------------------BACKGROUND TESTS TO PASS-------->
    _.last(["a","b","c"])       = "c"           //No NUMBER arg, return last element
    _.last(["a","b","c"],2)     = ["b","c"]     //NUMBER arg = 2, return last 2
    _.last(["a","b","c"], -1)   = []            //NUMBER arg is -number, return []
    _.last(["a","b","c"], 5)    = ["a","b","c"] //NUMBER greater than array.length, return array
    _.last({a:"b"}, 2)          = [],           //1st argument = Object, return []
    

    
/*5. _.EACH = it runs the function which is an argument, for each element in the array*/
    **The function argument will always have 3 args by default -element, index, array-**
    **These 3 args are set in the function definition so when we call the function, they already exist**
    **You can name them whatever you want --- VAL is equal to EACH ELEMENT**
        **_.each([1,2,3], function(val){console.log(val + 1}) = 2
                                                                3 
                                                                4 **
    a. takes a COLLECTION and a FUNCTION
    b. IF
        1b. COLLECTION is an array
            -Call FUNCTION once for each element with arguments =
                -the element
                -its index
                -the COLLECTION
            > " if(Array.isArray(coll)){
                " for(var i = 0; i < coll.length; i++){
                    " fun(coll[i], i, coll)
                " }
              " }
    c. ELSE IF
        1c. COLLECTION is an object
            -Call FUNCTION once for each property with arguments =
                -propertys value
                -its key
                -the COLLECTION
            > " else if(typeof coll === 'object'){
                " for(var key in coll){
                    " fun(coll[key], key, coll)
                " }
               " }
    d. <------------------BACKGROUND TESTS TO PASS-------->
    var inputArray = [1,2,3,4,5];
    var inputObject = {a:"1",b:"2",c:"3",d:"4"};
        /**REASSIGNS each ELEMENT Value in the array to = currentElement * 5 **/
        1d. _.each(inputArray, function(e, i, a){
            inputArray[i] = e*a.length;});
            "RESULT SHOULD EQUAL:"
            [5,10,15,20,25]
            
        /* Object.keys(o).length gets the total number of keys in the o arg object*/
        /**For each property in the object, a NEW PROPERTY is created */
        The NEW PROPERTY names = the current property values of the INPUTOBJECT properties 
        /* The PROPERTY VALUE of each NEW PROPERTY is = theCurrentKey + 4 /*/
        /* The original keys/values are DELETED after each new property is added to the object*/
        2d. _.each(inputObject, function(v, k, o){
            inputObject[v] = k + Object.keys(o).length;
            delete inputObject[k];});
            
            "RESULT SHOULD EQUAL:"
            {1:"a4", 2:"b4", 3:"c4", 4:"d4"} 
            

            
/* 6. _.INDEXOF = Finds the index of the VALUE arg in the ARRAY arg*/
    **_.indexOf ONLY returns the index of the 1st occurence of the VALUE arg**
                **_.indexOf([55,66,77,88,77], 77) returns >> 2**
    a. takes ARRAY and VALUE for arguments
    b. USE A LOOP
        1b. You can try a FOR LOOP to start
        2b. Im using _.each, the API we just created
            - _.each() requires a collection and a function
            - Im going to use the array argument from _.indexOf then create a function expression
            
            - _.each has 3 default args - element, index, collection
            - I just need to name those to access them
            - REMEMBER: Here, we-re CALLING the function NOT defining/creating it
            > "_.each(array, function(element, i, collection){ YOUR CODE HERE })"
                
                - _.each CANNOT return a value but it can perform actions so:
                - I created an empty array above the _.each
                - If the value we-re looking for matches an element in the array, push that index
                > " var iArr = [];   
                  " _.each(arr, function(e, i, arr){
                        " if(e === v){
                            " iArr.push(i);
                    "    } 
                    "});
    c. IF + ELSE - this will return the index position or - 1
        1c. " if(iArr[0] !== undefined)" > then there was at least 1 match
            " {return iArr[0]}"
        2c. " else {return - 1}"         > no matches



/* 7. _.FILTER = Returns an array of elements that have pass a certain test*/
    **_.filter([1,2,4,5], function(x){return x % 2 === 0}) returns >> [2,4]**
    a. takes an ARRAY and a FUNCTION
    b. declare an EMPTY ARRAY > "var newArr = [];
    c. USE A LOOP
        1c. You can always start with a FOR LOOP
        2c. Im using the _.each API we just created 
            > " _.each(arr, function(val, i, eArr){ YOUR CODE HERE })    
    d. RETURN NEW ARRAY
        1d. Must return NEW ARRAY of elements ONLY: 
            if the calling function for those elements returned TRUE
        > " if(func(val, i, eArr)) {newArr.push(val)}
        - D. ABOVE EXPLAINED
            -my ARRAY parameter     = "arr
            -my Function parameter  = "func
            -they are PLACEHOLDERS
                > func(val, i, eArr) is "arg2" the function that WILL be created by
                  whoever calls the function _.filter(arg1, arg2)
                
                - if I call _.filter(array, function(x){return x > 1})
                - An array will be returned with values that are GREATER THAN 1
                - func(val, i, eArr) = function(x){return x > 1}
                - x = val ... val = the current element in the array as its looping
        2d. THE LAST STEP - RETURN THE NEWARRAY
        > " return newArr 
        " }
                