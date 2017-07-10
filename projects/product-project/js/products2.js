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
    var searchInput2 = "<input placeholder='Search ALL Products...' id='searchAll' type='text' name='searchAllProperties' value><br>"
    var searchDiv = "<div id='search-div'></div>"
  
    $("nav").after(searchDiv)
    $("#search-div").append(searchInput)
    $("#search-div").append(searchInput2)
    
  
  //1. Using DOM Javascript to invoke ONINPUT change VS. SEARCH CLICK
  //2. Needed to perform search on value change vs. on lost focus
    document.getElementById("searchBox").oninput = function(event){searchResults(event)}
    document.getElementById("searchAll").oninput = function(event){searchAllProperties(event)}
   
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
    function searchAllProperties(e){
        //\\\\\\\\\\\\\\\\\
        //2A-SPECIAL. search EACH Product Function
        allProducts.forEach(function(prod, i, arr ){
        
        //findAllMatches(3, prod)        
        //findAllMatches(3, prod)
        //findAllMatches(3, prod)
        
        //////////////////////////////////////
        function findALLMatches(eachProductProperty){
            //2a-special. searches the text string which = "DESC" property value
            var searchAllText = $("#searchAll")[0].value
            var nxtSearchAll = 0
            //2b-special - GENERAL VARS
            var descriptionSearch1
            var descriptionSearch2
            var descriptionSearch3
            
            //2c-special - product properties
                //STRING
                // eachProductProperty.desc
                
                //ARRAYS
                // eachProductProperty.availableColors
                // eachProductProperty.specs
            
            if(typeof eachProductProperty === "string"){
                descriptionSearch1 = eachProductProperty.desc.toLowerCase().search(searchAllText.toLowerCase())
            }
            else if(typeof eachProductProperty === "object"){
                descriptionSearch2 = eachProductProperty.availableColors
                descriptionSearch3 = eachProductProperty.specs
                
            }
            
            //var secondMatch = prod.desc.toLowerCase().indexOf(searchText.toLowerCase(), firstMatch + 1)
            //\\\\\\\\\\\\\\\\\\\\\\
            function recursion1(){
            var productDesc = eachProductProperty.toLowerCase()
            var sIndex = productDesc.indexOf(searchAllText.toLowerCase(), nxtSearchAll);
            var result
            var eArr = []
                      
            //we want an empty array bc an empty array will concat but with an empty value, it's blank
            //recursion is a different way to write a for loop
            //once sIndex = -1
            if(sIndex === -1){return eArr}
                      
            else if( sIndex > -1){
                eArr.push(sIndex);
                nxtSearchAll = sIndex + 1;     
                        
                return eArr.concat(findALLMatches(firstMatch, nxtSearch, sText));
            }
        return result;
        }
        
        // if(i > -1){
        // var allResults = findOtherMatches(descriptionSearch, 0, searchText)
        // }
}
})
} //ENDOF: SEARCH ALL PROPERTIES - USING RECURSION
  
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
    //   img/product/thumbs/edge-gold.jpg
    //   img/product/edge-gold.jpg
    
    
    
    /*------------------- 4. ON CLICK ----------------*/  
    //LOCATE ALL IMAGES - make a click function
    // var windowInnerW = (window.innerWidth - 17);
    // var windowInnerH = (window.outerHeight - 17);
    var currentScrollY

    /////////////////////////////
    $("p img").click(function(e){
        currentScrollY = window.scrollY
        //alert("ON")
        //alert("ON")
        
        //1. MODAL-WRAPPER
        $("<div>").attr({id: "modal-wrapper"})
        .css({"width":"100%", "height":"100%", "background-color":"", "z-index":"1",
            "opacity":"1", "margin": "-1% auto", "position": "absolute", "left": "0%", "display": "block"})
        //2. MYModal div
        .append($("<div>")
        .attr({id: "myModal"})
        .css({"width":"100%", "height":((window.outerHeight * 3) + "px"), "background-color":"black",
        "z-index":"1", "opacity":".3", "margin": "0% auto", "position": "absolute", "left": "0%"}))
        
        .prependTo("body")
        
        
        //3a. MODAL CONTENT DIV - LINE 471(ONLOAD EVENT FOR HEIGHT)
        $("#modal-wrapper")
        .append($("<div>").attr({id: "modal-content-div"})
        .css({"margin": "5% auto", "z-index":"2", "opacity":"1", "position": "absolute",
            "left":"25%", "width":"50%","height":"600px" ,
            "top":window.scrollY, "background-color": "white", "border-radius":"26px"}))
            
            //3b. MODAL-IMG
            $("<img>").attr({src: this.src.replace("/thumbs", ""), id: "modal-image"})
            .css({"margin": "4% auto", "z-index":"2", "opacity":"1", "position": "absolute",
                "left":"0%", "width":"100%"}).appendTo("#modal-content-div")
            //3b. MODAL-IMG >> DIV
            $("#modal-image").wrap($("<div>").attr("id", "modal-image-div")
            .css({"margin": "2% auto", "z-index":"2", "opacity":"1", "position": "absolute",
                "left":"6%", "width":"25%"}))
            
            //3c. MODAL-CONTENT-DATA
            var productIndex = this.parentElement.parentElement.classList[0]
            productIndex = productIndex.slice(productIndex.lastIndexOf("-") + 1)
            
            //VERY IMPORTANT ERROR: -1 NEEDED FOR 0 INDEXING
            productIndex = productIndex - 1
            
            //\\\\\\\\\\\\\\\\\\\
            function modalData(){
                var topIncrease = 0
                allProducts[productIndex].specs.forEach(function(e, i, a){
                //console.log(allProducts[productIndex].specs)        
                    $("#modal-content-div")
                        .append($("<p>").text(e).addClass("modal-image-paras")
                        .css({position: "absolute", "padding-top": "20px", "top":topIncrease + "px", "z-index":"2",
                            "margin-top":"15px"
                    }))    
                    topIncrease = topIncrease + 50
                })
                //PARAGRAPH DIV
                $("#modal-content-div p").wrapAll($("<div>")
                .css({"position":"absolute","top":"40px","left":"254px","margin-right":"15px","width":"60%",
                    "margin-left":"45px"
                }))
            }
            
            modalData()
            //IMAGE SIZES FOR SMALLER IMAGES        
            if(this.parentElement.parentElement.dataset.product === "case"){$("#modal-image-div")[0].style.width = "23%"}
            if(this.parentElement.parentElement.classList[0] === "product-div-10"){$("#modal-image-div")[0].style.width = "45%";$("#modal-image-div")[0].style.left = "0%"}
            if(this.parentElement.parentElement.classList[0] === "product-div-11"){$("#modal-image-div")[0].style.width = "45%";$("#modal-image-div")[0].style.left = "0%"}
            if(this.parentElement.parentElement.classList[0] === "product-div-3"){$("#modal-image-div")[0].style.width = "35%";$("#modal-image-div")[0].style.left = "6%"}
            if(this.parentElement.parentElement.classList[0] === "product-div-5"){$("#modal-image-div")[0].style.width = "30%";$("#modal-image-div")[0].style.left = "6%"}
            
        
        //4. MYMODAL-img - CLICK EVENT
        //Had to put the event inside of the click function bc otherwise 
            //the element was not created yet
        $("#modal-image").click(function(){ 
            $("#modal-wrapper").remove()
            //$("#modal-wrapper").css("display","none")
            
            //GIVE VARIABLE LATER
            window.onscroll = ""
        })
        
        //LOOK INTO: nesting event handlers -- MODAL-WRAPPER CLICK EVENT
        $("#modal-wrapper").click(function(){ 
            $("#modal-wrapper").remove()
            //$("#modal-wrapper").css("display","none")
            window.onscroll = ""
        })
        
        
        //4B. MODAL SCROLL EVENT
        window.onscroll = function(){
        //REMOVE MODAL AFTER SCROLLING DOWN PAST BOTTOM OF IMAGE
        
        var clientH = $("#modal-wrapper img")[0].clientHeight
        var modalScrollBottom = window.outerHeight * .15 + clientH
        
        modalScrollBottom = modalScrollBottom + currentScrollY
        var modalScrollTop = currentScrollY - clientH
        //console.log()
        //modalScroll = modalScroll + 500
        
        if(window.scrollY > modalScrollBottom){
            $("#modal-wrapper").remove();
            window.onscroll = ""
        } else if (window.scrollY < modalScrollTop){
            $("#modal-wrapper").remove();
            window.onscroll = ""
        }
            //alert("success!")}
        }
        
        
        //3c1 >> MODAL-CONTENT-DIV HEIGHT
        document.getElementById("modal-image").onload = function(){
            //alert("function started")
            var modContentH = $("#modal-content-div img")[0].clientHeight + 60
            $("#modal-content-div")[0].style.height = modContentH + "px"
            
            $("#myModal")[0].style.top = ((window.scrollY - 350) + "px")
            }
    
    })  //ENDOF: IMG CLICK FUNCTION
    
        
            
    
      
      
      
  
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