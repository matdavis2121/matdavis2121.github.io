
window.addEventListener("load", function(){
    var world = document.querySelector("#world")
    world.innerText = "______"
    
    var worldName = document.querySelector("#world-input")
    worldName.addEventListener("input", function(){
        if(this.value === ""){
            world.innerText = "________"
            world.style.color = "black"
        }
        else if(this.value){
            world.innerText = this.value
            world.style.color = "green"
        }
    })
}) 



