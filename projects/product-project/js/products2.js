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
        //PullAllData function that populates the divs
        pullAllData()
    })
 
  
    ////////////////////////////////////////////////////////////
    function pullAllData(){
    var eachProduct = []
    
    //\\\\\\\\\\\\\\\\\
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
        //.append($("<p>").text(prod.specs))
          
        .append($("<p>").text("IN-STOCK: " + prod.stock))
        //FINAL TOUCHES - hr divider || appendTo MAIN
        //.append($("<hr>"))
        .appendTo("main")
        
    /*F-B. ASSIGNING DATASet ATTRIBUTE*/
        var datasetSelector = ".product-div" + "-" +(i +1)
        $(datasetSelector).attr("data-product", prod.type)
        
        })
        // NOT RETURNING ANYTHING
    } //ENDOF: pullAllData
  
  
  
  /*----------------------- 2. SEARCH INPUT---------------*/
  //2A. SEARCH DIV || SEARCH INPUT
    var searchInput = "<input placeholder='Search Products...' id='searchBox' type='text' name='searchAll' value><br>"
    var searchDiv = "<div id='search-div'></div>"
  
    $("nav").after(searchDiv)
    $("#search-div").append(searchInput)
  
  //1. Using DOM Javascript to invoke ONINPUT change VS. SEARCH CLICK
  //2. Needed to perform search on value change vs. on lost focus
    document.getElementById("searchBox").oninput = function(event){searchResults(event)}
   
   ///////////////////////////////////////////////////////
    function searchResults(e){
        //console.log(e.target.localName)   
        var searchText = e.target.value
        
        //CHECKS FOR unwantedCharacters AND DOESN'T GO ANY FURTHER
        if(unwantedCharacters(searchText)){return}
        
        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        //MAKE AN ARRAY OF UNWANTED CHARACTERS AND HAVE THEM LOOP THRU
        function unwantedCharacters(sText){
            if(sText === " " || sText === "," || sText === "-" ){return true} 
            else if(sText[0] === " " && sText[1] === " "){return true}
            else { return false}
        }
        
        //CHECKS FOR searchText starting with a BLANK SPACE
        //NEED TO: make a function that removes ALL blank spaces. 0 index should be a character
        if(searchText[0] === " "){
            searchText = searchText.replace(" ","")
            //FAILED: moves the cursor BUT doesn't remove the spaces
            // $("#searchBox")[0].selectionStart = 0
            // $("#searchBox")[0].selectionEnd = 0
        }
        if(searchText[1] === " "){searchText = searchText.replace(" ","")}
        if(searchText[2] === " "){searchText = searchText.replace(" ","")}

        
        

        
        var productClass
        //REMOVE PREVIOUS SPAN
        //WOULDNT WORK PROPERLY - placing it INSIDE THE LOOP assigned the class THEN REMOVED IT OVER AND OVER
        if($(".highlighted-search-txt") !== null) {
            allProducts.forEach(function(p, i){
                $(".highlighted-search-txt").html(function(){
                    //var spanText = this.innerText
                    //console.log(spanText)
                    //$(".highlighted-search-txt").replaceWith("")
                    //if($("#searchBox")[0].value  < 1 || $("#searchBox")[0].value === ""){
                    //console.log(p.desc)
                    //COULDN'T USE THIS BC SOME PRODUCTS DIDN'T MATCH THE SEARCH
                    $("div p:nth-child(2)")[i].innerHTML = p.desc
                    //}
                })
            })
        }
        
        //When the input field is EMPTY - RESET
        if(searchText === undefined || searchText === ""){
            //console.log("1. no search text")
            $("div[data-product='phone']").show()
            $("div[data-product='case']").show()
            
        }    
        else if(searchText){
            //console.log("2. THERE IS search text")
            
            //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
            //DONT USE JUST YET - JUST CREATED
            function removeUnwantedCharacters(searchText){
                var commas = ","
                var dashes = "-"
                var empty = " "
                
                var newString 
                if(searchText.indexOf(commas)){newString = searchText.replace(commas, empty)}
                return newString
            }
            
            
            
            //\\\\\\\\\\\\\\\\\
            //2A. search EACH Product Function
            allProducts.forEach(function(prod, i, arr ){
                
                //2a. searches the text string which = "DESC" property value
                //--SEARCHES ONLY THE PROD.DESC - make it search every match then every product, not just the 1st match?
                var descriptionSearch = prod.desc.toLowerCase().search(searchText.toLowerCase())
                    
                    //////////////////////////////////////
                    function findOtherMatches(firstMatch, nxtSearch, sText){
                        
                        //var secondMatch = prod.desc.toLowerCase().indexOf(searchText.toLowerCase(), firstMatch + 1)
                        var productDesc = prod.desc.toLowerCase()
                        var sIndex = productDesc.indexOf(sText.toLowerCase(), nxtSearch);
                        var result
                        var eArr = []
                                  
                        //we want an empty array bc an empty array will concat but with an empty value, it's blank
                        //recursion is a different way to write a for loop
                        //once sIndex = -1
                        if(sIndex === -1){return eArr}
                                  
                        else if( sIndex > -1){
                            eArr.push(sIndex);
                            nxtSearch = sIndex + 1;     
                                    
                            return eArr.concat(findOtherMatches(firstMatch, nxtSearch, sText));
                                
                        }
                    return result;
                    }
                    if(i > -1){
                    var allResults = findOtherMatches(descriptionSearch, 0, searchText)
                    }
                    
                    
                    
                    //LOOSE IF: IF for only running on the first product
                    //Need to make this loop until all occurences of SEARCHTEXT is found
                    // if(i === 0){
                    // findOtherMatches(descriptionSearch)
                    // }

                    
                
                productClass = "." + "product-div" + "-" + (i +1)
                //Uses the indexOf + the length of the search to slice out word from "DESC" property
                var highlightSearch
                var spanReplacement 
                
                //2b. found result or no?
                if( descriptionSearch < 0 ){$(productClass).hide()}
                else if( descriptionSearch > -1){
                    //console.log("3. THE search text WAS FOUND!")
                    //Show the product div
                    $(productClass).show();
                    //console.log("4.")
                    
                    //2c. replaces current text with NEW SPAN
                    //2c1. After this point, if original text is uppercase then it only highlights uppercase
                    highlightSearch = prod.desc.slice(descriptionSearch, descriptionSearch + searchText.length)
                    
                    var highlightSearchLower = prod.desc.slice(descriptionSearch, descriptionSearch + searchText.length)
                    if(highlightSearchLower.length > 0){highlightSearchLower = highlightSearchLower[0].toLowerCase() + highlightSearchLower.slice(1)}
                    else(highlightSearchLower = highlightSearchLower[0].toLowerCase())
                    
                    //console.log("5.")
                    
                    /////////////////////////////////
                    function allHighlightSearches(){
                        var highlights
                        var newSpanReplace
                        //console.log("6.")
                        //allResults.forEach(function(searchIndexes, i){
                            //if(i === 0){
                                highlights = prod.desc.slice(descriptionSearch, descriptionSearch + searchText.length)
                                newSpanReplace = "<span class='highlighted-search-txt'>" + highlightSearch + "</span>"
                                
                                var newSpanReplaceLower = "<span class='highlighted-search-txt'>" + highlightSearchLower + "</span>"
                                
                                ///////////////////////////////////////////////////////////////////////////////////
                                $(productClass + " p:nth-child(2):contains('" + highlightSearch + "')").html(function(){
                                //console.log(highlightSearch,"highlightsearc")
                                /*EXPERIMENTAL - NEEDS FURTHER TESTING --- WAS SUPPOSED TO LOOK FOR EVERY WORD*/
                                // var newHTML = this.innerHTML.split(highlights).join(newSpanReplace).split(" ")
                                // var pushy = [];
                                // var highUppercased
                                    
                                //     if(highlights.length > 0){highUppercased = highlights[0].toUpperCase() + highlights.slice(1)}
                                //     else(highUppercased = highlights[0].toUpperCase())
                                //     var newSpanReplaceUpper = "<span class='highlighted-search-txt'>" + highUppercased + "</span>"
                                    
                                //     for(var i = 0; i < newHTML.length; i++){
                                //         if(newHTML[i][0] === highUppercased[0]){
                                //             pushy.push(newHTML[i].replace(highUppercased, newSpanReplaceUpper ))
                                //         } else {pushy.push(newHTML[i])}
                                //     }
                                // return pushy.join(" ")
                                var part1 = this.innerHTML.split(highlightSearch) //.join(newSpanReplace)
                                var part2Lower
                                var partFinal
                                var partsArray = []
                                    if(highlightSearch.charCodeAt(0) < 91){
                                        part1.forEach(function(el, i, a){
                                            if(el.search(highlightSearchLower) > -1){
                                                part2Lower = el.split(highlightSearchLower)
                                                part2Lower = part2Lower.join(newSpanReplaceLower)
                                                partsArray.push(part2Lower)
                                            }
                                            else{partsArray.push(el)}
                                        })
                                    } else {partFinal = part1.join(newSpanReplace); return partFinal}
                                partFinal = partsArray.join(newSpanReplace)
                                //console.log(partFinal,"partfinal")
                                return partFinal
                                }) //ENDOF:HTML SPAN FUNCTION

                                    //span length = 126
                                    //split by the entire span???

                            //}
                        //})
                        
                        $(".highlighted-search-txt").css({"padding":"4px",
                                                "border-radius":"15px",
                                                "background-color": "green", "color": "white"})  
                            //}
                    }
                    
                    allHighlightSearches()
                    

                }
            }) //ENDOF: EACH
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
                //console.log("Now showing ALL products!")
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
            //console.log("only showing phones")
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
            //console.log("only showing cases")
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
    3. SPAN TESTING
        //   /* TESTING*/
        //   var test1 = $(".product-div-1 p:contains('Samsung')").text()
        //   var searchingFor = "sung"
        //   var test1_index = test1.search(searchingFor)
        //   var test1_high = test1.slice(test1_index, test1_index + searchingFor.length)
          
        //   var spanString = "<span class='highhigh'>" + test1_high + "</span>"
          
        //   $(".product-div-1 p:contains('Samsung')").html(function(){
        //       return this.innerHTML.replace(test1_high, spanString)
        //   })
          
        //   $("span.highhigh").css({"padding":"4px","border-radius":"15px","background-color": "green", "color": "white"})
        //   console.log()
        //   /* TESTING*/
        
        
        
        /* ------------------------------REMOVED CODE-----------------------*/
            //spanReplacement = "<span class='highlighted-search-txt'>" + highlightSearch + "</span>"
        
            // //2d. Finds the paragraph with the searchedString and highlights THAT string
            // $(productClass + " p:nth-child(2):contains('" + highlightSearch + "')").html(function(){
            // return this.innerHTML.replace(highlightSearch, spanReplacement)
            // }) //ENDOF: HTML ANON FUNCTION
        
        
            // $(".highlighted-search-txt").css({"padding":"4px",
            //                             "border-radius":"15px",
            //                             "background-color": "green", "color": "white"})
        
   
   
   
  // ----------------ALL YOUR CODE GOES ABOVE HERE--------------- //
}); //ENDOF: .JSON
    }) //ENDOF: GET JSON
        //}) //ENDOF: Their 1st $function to start the js //2. REMOVED not necessary