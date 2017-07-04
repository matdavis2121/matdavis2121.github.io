/* global $ _ opspark */
"use strict"

$(document).ready(function() {
    $.getJSON('data/product.json', function (allProducts) {
                                                            "ERROR LOG"
    /*------------1. MAJOR ERROR ON MY END WHEN CORRECTING DOUBLE ID#'S --- MADE IT INTO A NON NUMBER AND FORGOT QUOTES!*/
                    //CHANGED PHONE CASE ID FROM "5" TO "51"
                    //"07/04/2017 16:54:40"- AFTER A HARD REFRESH, ALL IS FINE
    /*------------2. REMOVED not necessary*/
                    // $(function () {
    
    

//-------------------------------------- ALL YOUR CODE GOES BELOW HERE------------------------------------------ //
  
  
/* ----------------STEP 1 - PULLING ALL ITEMS--------------*/  
  //??Confirm that a named function is NOT allowed when using .html()
  $("main").html(function(){
      pullAllData()
      console.log("I'M WORKING!")
  })
  
  
  
    ////////////////////////////////////////////////////////////
    function pullAllData(){
    var eachProduct = []
    
    allProducts.forEach(function(prod, i, arr ){
    /*1a. MAJOR MISTAKE - WAS ASSIGNING QUERIED DIV INSTEAD OF NEWLY CREATED DIV!!*/
    $("<div>").css("border", "1px solid black").addClass("product-div" + "-" +(i +1))
        //1b. REMOVED-using in other ways -- //.append($("<p>").text(prod.type))
        .append($("<p>").append("<img src='img/product/thumbs/" + prod.image +"'/>"))
        .append($("<p>").text(prod.desc))
        .append($("<p>").text("PRICE: $" + prod.price))
        .append($("<p>").text(prod.color))
          
        //AN ARRAY
        .append($("<p>").text(prod.availableColors))
          
        //AN ARRAY
        .append($("<p>").text(prod.specs))
          
        .append($("<p>").text(prod.stock))
        //FINAL TOUCHES
        .append($("<hr>"))
        .appendTo("main")
        
        //2. ASSIGNING DATASet ATTRIBUTE
        var datasetSelector = ".product-div" + "-" +(i +1)
        $(datasetSelector).attr("data-product", prod.type)
        
      })
      // NOT RETURNING ANYTHING
  } //ENDOF: pullAllData
  
  
  
  /*----------------------- 2. SEARCH INPUT---------------*/
  //2A. SEARCH DIV || SEARCH INPUT
  var searchInput = "Search Products: <input id='searchBox' type='text' name='searchAll' value><br>"
  var searchDiv = "<div id='search-div'></div>"
  
  $("nav").after(searchDiv)
  $("#search-div").append(searchInput)
  
  //1. Using DOM Javascript to invoke ONINPUT change VS. SEARCH CLICK
  //2. Needed to 
  document.getElementById("searchBox").oninput = function(event){me(event)}
   
    function me(e){
        //console.log(e.target.localName)   
        var searchText = e.target.value
        if(searchText[0].toLowerCase() === "p"){
            $("div[data-product='case']").hide()
        } else if(searchText[0].toLowerCase() === "c"){
            $("div[data-product='phone']").hide()
            
        }
    }
  
  
  /*----------------------- 3. FILTERS---------------*/
  //3A. PHONE/CASE FILTER BUTTONS
        //Notes: 3a. Make search-div relative and make the elements inside absolute?
  var phoneFilter = "<button id='phone-filter'>PHONE</button>"
  $("#search-div").append(phoneFilter)
  
  /* ------------------------------TESTING TESTING-----------------------*/
  
  /*1. Using Find and replace to remove Quotes
    a. search for an opening quote with WORD MATCH turned off
    b. leave a blank space in the replace input field
    c. press enter
   */
   
   
   
   
   
  // ----------------ALL YOUR CODE GOES ABOVE HERE--------------- //
}); //ENDOF: .JSON
    }) //ENDOF: GET JSON
        //}) //ENDOF: Their 1st $function to start the js //2. REMOVED not necessary