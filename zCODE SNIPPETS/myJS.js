/* BACKUP OF CUSTOM JAVASCRIPT - 061617 - 05:05pm
    1. THIS TURNS THE INTELLISENSE BACKGROUND TO WHITE BY
        a. finding the element using it's class
        b. renaming the element id
        c. using the element id to match up with the STYLES.CSS for C9
 */

/* GOALS!:
    1. Add my own custom menu AFTER the Support Menu
    2. Add saved column spacing templates and more
 */

/* --CUSTOMIZATIONS --*/
**RUN IN CHROME CONSOLE**

//1. Change my intellisense background to white 
var myIntell = document.querySelectorAll(".ace_scroller");
myIntell[myIntell.length - 1].id = "my-intelli"; .

a.
//2. AutoAdjust 2 columns - 3 defaults
//061617 - 0556pm
    // a. MORE LEFT
    // b. MORE RIGHT
    // c. MORE IMMEDIATE WINDOW
    // d. DEFAULT EVEN STEVEN
var a = document.querySelectorAll(".hsplitbox")    
var myAll = a[3].children
// d. DEFAULT //////////////////////////////////////////
    //myAll[0 & 1] must equal the difference of myAll[2]
    var myResplit1 = myAll[0].style.right = "50%"
    var myResplit2 = myAll[1].style.right = "50%"
    
    //myAll[2] must equal the difference of the settings above
    var myResplit3 = myAll[2].style.left = "50%"
    
// a. BIG **LEFT** PANE ////////////////////////////////
    //myAll[0 & 1] must equal the difference of myAll[2]
    var myResplit1 = myAll[0].style.right = "25%"
    var myResplit2 = myAll[1].style.right = "25%"
    
    //myAll[2] must equal the difference of the settings above
    var myResplit3 = myAll[2].style.left = "75%"
    
// b. BIG **RIGHT** PANE ///////////////////////////////
    //myAll[0 & 1] must equal the difference of myAll[2]
    var myResplit1 = myAll[0].style.right = "75%"
    var myResplit2 = myAll[1].style.right = "75%"
    
    //myAll[2] must equal the difference of the settings above
    var myResplit3 = myAll[2].style.left = "25%"    
    
//3. Copying MAIN MENU BUTTON BEHAVIOR
var overClasses = "c9-menu-btn c9-menu-btnBool c9-menu-btnOver c9-menu-btnmenuOver c9-menu-btnDown c9-menu-btnmenuDown submenu c9-menu-btnDown c9-menu-btnmenuDown c9-menu-btnDown c9-menu-btnmenuDown"
var outClasses = "c9-menu-btn c9-menu-btnBool submenu" 

function s2over(){
	if(Support2[10].className = outClasses){
		document.getElementById("support-2").className = overClasses
	} else {
		document.getElementById("support-2").className = outClasses
	}
}

/* 4. FULL MAIN MENU CUSTOMIZATION CODE - 06/17/2017 13:00:09*/
/* ---------------------------PART 1 - declaring AND creating elements-------------------------------------*/
var overClasses = "c9-menu-btn c9-menu-btnBool c9-menu-btnOver c9-menu-btnmenuOver " + 
				  "c9-menu-btnDown c9-menu-btnmenuDown submenu c9-menu-btnDown c9-menu-btnmenuDown c9-menu-btnDown c9-menu-btnmenuDown"
var outClasses = "c9-menu-btn c9-menu-btnBool submenu" 
var menuName = prompt("Please enter your First Name.")
//
var Support2 = document.querySelectorAll(".c9-menu-btn")
var supportinnerText =  '\n' + menuName.toUpperCase() + '<div class="c9-fix"></div>' +
                	'<div class="icon"></div>'


//creates new element
var newDiv = document.createElement("DIV")
//Gets parent element to add new element to the end of the element
var myParent = Support2[0].parentElement
myParent.appendChild(newDiv)

//adds inner HTML - everything between opening and closing tags
newDiv.innerHTML = supportinnerText

//Assigns attributes
newDiv.id = "support-2"
newDiv.className = "c9-menu-btn c9-menu-btnBool"
newDiv.style = "margin: 0px;"

//Prints last child for confirmation
console.log(myParent.lastChild)

/* ---------------------------PART 2 - FUNCTIONS AND EVENTS-------------------------------------*/
//ADD EVENT LISTENER - NO "on" at beginning of event, no invocation for function
//document.getElementById("support-2").addEventListener("mousemove", s2out)
//document.getElementById("support-2").addEventListener("dblclick", s1resize)

//SET ATTRIBUTE - needs function name and function invocation concat-ed
//document.getElementById("support-2").setAttribute("ondblclick", "s2over" + "()")
document.getElementById("support-2").onmouseover = (function() {s2over()});
document.getElementById("support-2").onmouseout = (function() {s2out()});

function s2over(){	
	document.getElementById("support-2").className = overClasses
	document.getElementById("support-2").innerText = "WE MADE IT IN!"	
}

function s2out(){
	document.getElementById("support-2").className = outClasses;
 	document.getElementById("support-2").innerText = "WE OUT!";
};

                "06/21/2017 02:42:20"
/*------------ 5. TIME STAMP FUNCTION-----------------------*/
/* ---------------CREATE ELEMENTS FOR TIME STAMP PANEL---------*/
  if(document.getElementById("mytime-copy2")){
    newP.parentNode.removeChild(newP.parentNode.childNodes[2])          
    }

var outer = '<div class="panelsbutton panelsbuttonBool commands "' +
            'id="mytime-div" title="commands (Ctrl-.)">Time Stamp</div>'
var panel = document.querySelectorAll(".panelsbutton")

if(!document.getElementById("mytime-div")){  
  var newDiv = document.createElement("DIV")
  panel[2].parentNode.appendChild(newDiv)  
  newDiv.outerHTML = outer 
};      

  var newP = document.createElement("TEXTAREA")  
  document.body.children[4].appendChild(newP)
  newP.style.display = "none"
  newP.id = "mytime-copy2"
  //newP.innerText = document.lastModified
  newP.style.position = "absolute"
  

/*------------- RUN ON CLICK CODE THEN REMOVE ELEMENT-------------*/  

var newDiv2 = document.getElementById("mytime-div")
var newP2 = document.getElementById("mytime-copy2")

newDiv2.onclick = function() {timeStamper()}
function timeStamper(){
    newP2.style.display = "block"
    newP2.innerText = document.lastModified
    newP2.select()
    document.getSelection().toString()
    console.log(document.execCommand("copy"))
    
    if(document.body.children[4].childNodes[2]){
      document.body.children[4].removeChild(document.body.children[4].childNodes[2])
      }        
}






//EVERY TESTING
function everyTest(collection, func){
    if(!func){
        _.each(collection, function(val, i, coll){
            if
        })
    }
    
    // if(Array.isArray(coll)){
    //     _.each(collection, function(val, i, arr){
    //         if(val){
                
    //         }
    //     });
    // } else if (typeof coll === "object"){
    //     _.each(collection, function(val, key, coll){
    //         if(val){
                
    //         }
    //     })
    // } 
}