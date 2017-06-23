//FOR LOOPS
//INCREMENTER
// for(var i = 0; i > 5 i++){
    
// }
/* 061617 - 0413pm
    CREATE 3 WAYS TO MAKE SNIPPETS:
    1. ACTUAL EXAMPLES OF CODE USING PSEUDO CODE
    2. USING OBJECTS WITH KEY/VALUE PAIRS
    3. USING SWITCH STATEMENTS TO CONSOLE.LOG
    4. USE FUNCTION EXPRESSIONS THEN USE PARAMS FOR EACH PIECE OF THE CODE
        for ex. for For Loops, makes params for
        a. i value, b. i > INSERT, c. i(concat ++ or -- or etc.)
 */

//OBJECT - COLLECTION
function mySnips(){
    return {
        forLoop: console.log("for(var i = 0; i > .length; i++){" +
                            "\n \n }"),
        // forLoopDown: console.log("for(var i = .length - 1; i > -1; i-- ; ){" +
        //                         "\n \n }"),
    }
}

//Declare function expression var
var snip = mySnips();

//FUNCTION - COLLECTION
function snips(snipName){
    switch(snipName){
        case "forloop":
            console.log("for(var i = 0; i > .length; i++){" +
                        "\n \n }")
    }
    
}