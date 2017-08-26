//USES: var from test.js to console.log fullname BUT ONLY IN ISOLATED WORLD
//console.log(tester.fullName)
/*
MULTIPLE MISTAKES1
1. used db named vs. table name
2. forgot to store new prim key after autoNum
3. db inside outside of success??? prolly not the real issue
4. 
*/

var versNum = 5

if(window.indexedDB.open("Hello_World_CX") !== undefined){createNewDB()}

function lo(s1,s2,s3){
    if(s2 === undefined){s2 = ""}
    if(s3 === undefined){s3 = ""}
    console.trace(s1,s2,s3)
}

//1. LOAD EventListener
window.addEventListener("load", function(){    
    var world = document.querySelector("#world") 
    
    //animation iteration setter
    dbCount()
    var entryCounter = 0
    var entries = getAllEntries()
    
    world.style.WebkitAnimation = "allWorlds 3s " + Number(localStorage.entryCount)
    world.addEventListener("webkitAnimationIteration", function(e){
        //lo("animation repeated");
        
        this.innerText = entries[entryCounter]
        entryCounter += 1
    });
    
    
    if(localStorage.worldName){world.innerText = localStorage.worldName;world.style.color = "green"}
    else{world.innerText = "______"}
    
    var worldName = document.querySelector("#world-input")
    worldName.addEventListener("input", function(){
        if(this.value === ""){
            world.innerText = "________"
            world.style.color = "black"
        }
        else if(this.value){
            world.innerText = this.value
            world.style.color = "green"
            if(typeof(Storage) !== undefined){localStorage.setItem("worldName", world.innerText)}
            else{console.log("Storage support not available")}
        }
    })


    //2. Input Keydown EventListener
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
    
    openDB.onupgradeneeded = function(e){lo(u1); DB = e.target.result; DB.createObjectStore("KeydownEntries"); DB.close()}
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


