//USES: var from test.js to console.log fullname BUT ONLY IN ISOLATED WORLD
//console.log(tester.fullName)
/*
MULTIPLE MISTAKES1
1. used db named vs. table name
2. forgot to store new prim key after autoNum
3. db inside outside of success??? prolly not the real issue
4. 
*/
console.groupCollapsed("Hello_World_CX")
var versNum = 5

createNewDB()


function lo(s1,s2,s3){
    if(s2 === undefined){s2 = ""}
    if(s3 === undefined){s3 = ""}
    
    
    console.groupCollapsed()
    console.trace(s1,s2 || "",s3 || "")
    console.groupEnd()
}


//1. LOAD EventListener
window.addEventListener("load", function(){    
    var world = document.querySelector("#world") 
    
    //animation iteration setter
    dbCount()
    var entryCounter = 1
    var entries = getAllEntries()

    //set first entry as the first INNERTEXT
    if(localStorage.firstEntry){world.innerText = localStorage.firstEntry;world.style.color = "green"}
    else{world.innerText = "______";world.style.color = "green"}
    
    //set webkitanimation style values
    world.style.WebkitAnimation = "allWorlds 2s " + (Number(localStorage.entryCount)+1)
    world.style.animationFillMode = "forwards"
    
    //animation iteration event listener
    world.addEventListener("webkitAnimationIteration", function(e){
        
        if(entryCounter === Number(localStorage.entryCount)) {
            world.style.animationName = "allWorldsReset"
            world.style.animationIterationCount = "1"
        }
        this.innerText = entries[entryCounter]
        entryCounter += 1
    });
    
    //animation END event listener
    world.addEventListener("webkitAnimationEnd", function(e){
        e.preventDefault = true
        this.style.opacity = "1"
        //this.innerText = "complete"//localStorage.worldName
        world.style.animationFillMode = "none"
        //world.style.animationName= "allWorldsReset"
        
    });
    
    //Input Element INPUT Event Listener
    var worldName = document.querySelector("#world-input")
    worldName.addEventListener("input", function(){
        if(this.value === ""){
            world.innerText = "________"
            world.style.color = "green"
        }
        else if(this.value){
            world.innerText = this.value
            world.style.color = "green"
            if(typeof(Storage) !== undefined){localStorage.setItem("worldName", world.innerText)}
            else{console.log("Storage support not available")}
        }
    })
    
    //Input CLICK Event to stop the animation when the INPUT ELEMENT is clicked on
    localStorage.clickOnce = false
    worldName.addEventListener("click", function(e){
        var clickOnce = JSON.parse(localStorage.clickOnce)
        if(!clickOnce){
            if(localStorage.worldName){world.innerText = localStorage.worldName;world.style.color = "green"}
            else{world.innerText = "______"}
            
            world.style.WebkitAnimation = "allWorlds 3s " + 0
            
            localStorage.clickOnce = true
        }
    })


    //Input Element KEYDOWN EventListener - adds the Inputs innertext to INDEXEDDB when user presses enter
    document.querySelector("#world-input").addEventListener("keydown", function(e){
        if(e.key === "Enter"){
            addEntryIDB(this.value)
        }
    })
}) //ENDOF: LOAD EVENTLISTNER



//3F. INDEXEDDB FUNCTIONS

//3Fa Create New DB
function createNewDB(){
    var openDB = window.indexedDB.open("Hello_World_CX",versNum)
    var s1 = "success", e1 = "error", u1 = "upgraded"
    var DB
    
    openDB.onupgradeneeded = function(e){lo(u1); DB = e.target.result; DB.createObjectStore("KeydownEntries"); DB.close() }
    openDB.onsuccess =       function(e){lo(s1); DB = e.target.result}
    openDB.onerror =         function(e){lo(e1)}
        
}

//3Fb. Add Entry
function addEntryIDB(entry){
    var openDB = window.indexedDB.open("Hello_World_CX",versNum)
    var s1 = "success", e1 = "error", u1 = "upgraded"
    var DB
    
    //openDB.onupgradeneeded = function(e){lo(u1); DB = e.target.result}
    openDB.onerror =         function(e){lo(e1,"ADD ENTRY")}
    openDB.onsuccess =       function(e){
        lo(s1, "ADD ENTRY"); DB = e.target.result

    
    
    var trans = DB.transaction(["KeydownEntries"], "readwrite").objectStore("KeydownEntries")
    var adding = trans.add(entry, autoNum())
    
        adding.onsuccess = function(){lo(s1,"adding " + entry)}
        adding.onerror = function(){lo(e1,"adding " + entry)}
    
    DB.close()
        
    } //endof: openDB success

    //////////////////
    function autoNum(){
        
        if(localStorage.HelloWorldCX_primaryKey){
            var a = Number(localStorage.HelloWorldCX_primaryKey) 
            a += 1
            
            lo(a,"result of autoNum")
            localStorage.HelloWorldCX_primaryKey = a
            return a
        }
        else if(!localStorage.HelloWorldCX_primaryKey){
            localStorage.HelloWorldCX_primaryKey = 1
            return 1
        }
        else{console.log(e, "function AUTONUM")}
    }
} //endof: ADD ENTRY

//3Fc. GET COUNT
function dbCount(){
    var openDB = window.indexedDB.open("Hello_World_CX")
    var res
    var entryCount = null
    
    openDB.onsuccess = function(e){res = e.target.result;
    
    var trans = res.transaction(["KeydownEntries"], "readonly").objectStore("KeydownEntries")
    var count = trans.count()
    	count.onsuccess =  function(e){entryCount = count.result;console.log(entryCount,"EntryCount"); localStorage.entryCount = entryCount -1}     
    res.close()    	
    }
}

//3Fd. Get Strings of Entries
function getAllEntries(){
    var openDB = window.indexedDB.open("Hello_World_CX")
    var res
    var entryCount = null
	var entries = []
    
    openDB.onsuccess = function(e){res = e.target.result;
    
    var trans = res.transaction(["KeydownEntries"], "readonly").objectStore("KeydownEntries")
    var count = trans.openCursor()
    	count.onsuccess =  function(e){ 
			var cursor = e.target.result;  
			if(cursor){entries.push(cursor.value); cursor.continue()}
			else{console.log("%cno cursor","color:red;font-size:20px")}
			
        }
	res.close()     
    }
//delete entries[entries.length - 1]    
return entries
}

//3Fe. Get First of Entries -- **CURRENTLY UNUSED** Issue with returning undefined
function getFirstEntry(){
    var openDB = window.indexedDB.open("Hello_World_CX")
    var res
    var entryCount = null
	var entry
    
    openDB.onsuccess = function(e){res = e.target.result;
    
    var trans = res.transaction(["KeydownEntries"], "readonly").objectStore("KeydownEntries")
    var count = trans.get(1)
    	count.onsuccess =  function(e){ 
			var cursor = e.target.result;  
			if(cursor){localStorage.firstEntry = cursor; }
			else{console.log("%cnoFirst Entry","color:red;font-size:20px")}
			
        }
	res.close()     
    }
//delete entries[entries.length - 1]    
return entry
}




//turn into a button?
//console.groupEnd()
