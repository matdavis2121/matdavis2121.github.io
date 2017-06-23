/*1. INSERTADJACENTHTML VS. CREATE NEW ELEMENT*/
var Support2 = document.querySelectorAll(".c9-menu-btn")
Support2[9].parentElement.insertAdjacentHTML("beforeend", Support2[9].outerHTML)
\\\\\\\FALSE\\\\\\\\\\
This only copies the HTML but doesnt create a new node

/*2. ADDING EVENT LISTENERS----------------------------------------------------*/
//must use GET-ELEMENT-BY-ID for addeventlistener
a. create new element - MANUALLY OR PROGRAMMATICALLY
b. add ID - manually or programmatically
c. use ID to addEventListener
d. create Toggle Function
//1. Adding with ADDEVENTLISTENER - notice no "ON" at the front of mouseover
document.getElementById("ID").addEventListener("mouseover", s2over)

//2. Adding by DOT NOTATION - anonymous function and invoked function in code block
document.getElementById("ID").onmousemove = function() {myFun()};

//3. By setting attribute of element or using JS to add for you
<element onmousemove="myFunction(event)"></element>
document.getElementById("support-2").setAttribute("ondblclick", "s2over" + "()")

//Can use document.querySelectorAll for functions
//Created a TOGGLE FUNCTION
function s2over(){
	if(Support2[10].style.backgroundColor === "black"){
		Support2[10].style.backgroundColor = "red"
	} else {
		Support2[10].style.backgroundColor = "black"
	}
}

//4. GETTING DATE AND TIME FROM DOCUMENT
	a. Get date and time
	document.lastModified
	"06/17/2017 12:33:40"
	
	b. Get just DATE - 1st is dynamic - 2nd is literal
	document.lastModified.slice(0, (document.lastModified.indexOf("2017") + 4))
	"06/17/2017"
	document.lastModified.slice(0, 10)
	"06/17/2017"
	
	c. Just get TIME
	document.lastModified.slice(11)
	"12:38:42"

//5. SHORTCUTS
	a. CTR + SHIFT + L = takes me to location of active file
	b. CTR + F6 = maximize console(immediate window)
	c. F2 when in KEYBINDING allows for entry of new KEYBOARD SHORTCUT
	//FIND AND REPLACE
	d. Ctrl + F to search input
	 - Enter to move fwd in search - Shift + Enter to move back
	d1. Ctrl + ALT + R to go to replace input --- CTRL + H
	 - Enter to replace current selection - Enter again to continue to replace next
	
	e. Ctrl + Num to focus on particular tab starting from 1
	f. 

//6. Array.indexOf(item, start)	
	var arr18 = [1,2,3,1]
	
	arr18.indexOf(1, 0) //RETURNS the 1st occurence
	0
	arr18.indexOf(1, 0+1) //RETURNS the 2nd occurence
	3
	arr18.indexOf(1, arr18.indexOf(1)+1) //RETURNS the 2nd occurence
	3
	
//6a. Array.some() 06/18/2017 02:10:58- how to check if a value exists
	//A.W3 SCHOOLS EXAMPLE
	<script>
	var ages = [3, 10, 18, 20];
	
	function checkAdult(age, index) {
	    if(age === 20){
		console.log(index + " " + age)
		return true };
	}
	
	function myFunction() {
	    document.getElementById("demo").innerHTML = ages.some(checkAdult);
	}
	</script>

	//B. C9-CHROME CONSOLE EXAMPLE
	function clearConsole(element, index){
		if(index === 0 ){
		console.log("We're on 0")
		} else {
		console.log("NOT 0!")
		}
	}
	
	var aCon = document.querySelectorAll(".ace_text-layer")
	aCon[7] //Element that holds all child text and span divs
	aCon[7].childNodes.forEach(clearConsole)
	/* ------------------UPDATE---------------------------*/
	//A. All vars
	var aCon = document.querySelectorAll(".ace_text-layer")
	aCon[7] //Element that holds all child text and span divs
	aCon[7].childNodes.forEach(clearConsole)
	var outParent = document.querySelectorAll(".codeditorHolder")
	var myCursor = aCon[7].parentNode.childNodes[aCon[7].parentNode.childNodes.length -1]
	
	//B. All Code
	/* Need to 1. remove input and blank output divs*/
	/* 2. remove output divs(seperate from blank divs)*/
	/* 3. set blinker top to 0 and change blinker class to cursor_smooth-blinking */
	//GOES TO: Output text line to remove its DIV
	var outParent = document.querySelectorAll(".codeditorHolder")
	//CURSOR DIV and it's child node (CURSOR)
	var myCursor = aCon[7].parentNode.childNodes[aCon[7].parentNode.childNodes.length -1]
	
	//CURSOR to top and make blink
	myCursor.childNodes[0].style.top = "0px"
	myCursor.className = "ace_layer ace_cursor-layer ace_slim-cursors ace_smooth-blinking"
						 //No blinking
						 "ace_layer ace_cursor-layer ace_slim-cursors ace_hidden-cursors"
	
	function clearConsole(element, index){
		if(index === 0 ){
		//console.log("We're on 0")
		aCon[7].childNodes[0].innerHTML = "";
		outParent[4].removeChild(outParent[4].childNodes[7])
		} else {
		aCon[7].removeChild(aCon[7].childNodes[index])
		}
	}
	/*------------ ARRAY.FOREACH()-----------------*/
	aCon[7].childNodes.forEach(clearConsole)
	
//7. CLOUD 9	

//8. Using high order functions
	/*a. Learn to make the function return everything you needing
	nonFriends(name, list){ 
		return allNonFriends.forEach(highFun)
		
		function highFun(element){
			var newArr = []
			CODE
			return newArr
		}
	}
	 */
	
	b. /* 06/20/2017 02:58:31 -- DOPE SOLUTION using only higher order function*/
function nonFriends(name, List){
    var allNonFriends = []
    List.forEach(pushNonFriends)
    return allNonFriends
    
    // 1st FOR EACH FUNCTION
    function pushNonFriends(element, index){
        if(element.name === name) {
            //DO NOTHING
        } else if(element.friends[0] === undefined ){
            allNonFriends.push(element.name)
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
	 
	 
//9. DOCUMENT, COPYING, PASTING
document.activeelement
document.getSelection().toString()