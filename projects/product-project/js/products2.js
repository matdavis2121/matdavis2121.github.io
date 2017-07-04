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
        //
        pullAllData()
    })
  
  
  
    ////////////////////////////////////////////////////////////
    function pullAllData(){
    var eachProduct = []
    
    allProducts.forEach(function(prod, i, arr ){
    /*F-e1. MAJOR MISTAKE - WAS ASSIGNING QUERIED DIV INSTEAD OF NEWLY CREATED DIV!!*/
    
    /*F-A - CREATING div || elements for each product*/
    $("<div>").css("border", "1px solid black").addClass("product-div" + "-" +(i +1))
        //F-n1. REMOVED-using in other ways -- //.append($("<p>").text(prod.type))
        //F-a1 - CREATING p elements for each product property
        .append($("<p>").append("<img src='img/product/thumbs/" + prod.image +"'/>"))
        .append($("<p>").text(prod.desc))
        .append($("<p>").text("PRICE: $" + prod.price))
        .append($("<p>").text(prod.color))
          
        //AN ARRAY
        .append($("<p>").text(prod.availableColors))
          
        //AN ARRAY
        .append($("<p>").text(prod.specs))
          
        .append($("<p>").text(prod.stock))
        //FINAL TOUCHES - hr divider || appendTo MAIN
        .append($("<hr>"))
        .appendTo("main")
        
    /*F-B. ASSIGNING DATASet ATTRIBUTE*/
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
   
   ///////////////////////////////////////////////////////
   //CHANGE: Function name before final version
    function me(e){
        //console.log(e.target.localName)   
        var searchText = e.target.value
        if(searchText[0].toLowerCase() === "p"){
            $("div[data-product='case']").hide()
        } else if(searchText[0].toLowerCase() === "c"){
            $("div[data-product='phone']").hide()
            
        }
    }
  
  
    /*------------------- 3. FILTERS----------------*/
        /*FILTERS COMPLETED - 07/04/2017 18:57:42 */
        //3a. GLOBAL VARS
        var phoneHide = false
        var caseHide = false
        var bothHidden = false
        
                    "3-All. RESET BUTTON"
        /*  Notes:  n1 - If no filter selected and all products button is pressed, show msg?
                    n2 - use animation effect - translate??   
        */
        var resetFilter = "<button id='reset-filter'>ALL PRODUCTS</button>"
        $(resetFilter).appendTo("#search-div")
        $("#reset-filter").click(productFilterReset)
        
        /////////////////////////////////
        function productFilterReset(){
            if(phoneHide || caseHide) {
                $("div[data-product='phone']").show()
                $("div[data-product='case']").show()
                console.log("Now showing ALL products!")
            }
        }                    
        
                    "3A. PHONE FILTER BUTTON"
        //Notes: n1 - Make search-div relative and make the elements inside absolute?
        var phoneFilter = "<button id='phone-filter'>PHONES</button>"
        $("#search-div").append(phoneFilter)
      
        //3a. ONCLICK EVENT - can I use THIS or EVENT?? || YES for BOTH
        $("#phone-filter").click(phoneClick)
      
        ///////////////////////////////////////////////
        function phoneClick(e){
            if(phoneHide){$("div[data-product='phone']").show()}
            
            $("div[data-product='case']").hide()
            console.log("only showing phones")
            caseHide = true
        }
      
    
                    "3B. CASE FILTER BUTTON"
        //Notes: n1 - Make search-div relative and make the elements inside absolute?
        var caseFilter = "<button id='case-filter'>CASES</button>"
        $("#search-div").append(caseFilter)
      
        //3a. ONCLICK EVENT - can I use THIS or EVENT?? || YES for BOTH
        $("#case-filter").click(caseClick)
      
        ///////////////////////////////////////////////
        function caseClick(e){
            if(caseHide){$("div[data-product='case']").show()}
          
            $("div[data-product='phone']").hide()
            console.log("only showing cases")
            phoneHide = true
        }  
      
      
      
      
      
      
      
  
  /* ------------------------------TESTING TESTING-----------------------*/
  
  /*1. Using Find and replace to remove Quotes
        a. search for an opening quote with WORD MATCH turned off
        b. leave a blank space in the replace input field
        c. press enter
    2. INSERT BEFORE ERROR
        a. insert before works like TAKE "A" and insert before "B"
        b. can't insertBefore if element hasn't been created yet
        c. My error >> $(resetFilter).insertBefore("#phone-filter")
            -resetFilter was an HTMLstring
            -#phone-filter was a selector of an element that wasn't created yet
        
        
   */
   
   
   
   
   
  // ----------------ALL YOUR CODE GOES ABOVE HERE--------------- //
}); //ENDOF: .JSON
    }) //ENDOF: GET JSON
        //}) //ENDOF: Their 1st $function to start the js //2. REMOVED not necessary