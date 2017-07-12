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
        var datasetIndex = ".product-div" + "-" +(i +1) 
        $(datasetSelector).attr("data-product", prod.type)
        $(datasetSelector).attr("data-index", i)
        
        
        
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
    document.getElementById("searchAll").oninput = function(event){console.log(searchAllProperties(event))}
   
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
        var recArray = []
        var i
        var productHits
        
        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        allProducts.forEach(function(prod, allPIndex, arr ){
        
            _.each(prod, function(property, key, obj){
                if(allPIndex > -1){
                    if(key === "desc" || key === "availableColors" || key === "specs")
                    i = 0
                    productHits = findALLMatches(property)
                    //console.log(productHits)
                }
            })
           
        // //2B - SPECIAL - JQUERY
        // var mainChildren = $("main")[0].children
        // productHits.forEach(function(v, i, a){
            
        //     $("main")[0].children[v].show()
            
        // })
        
        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        function findALLMatches(eachProductProperty){
            //2a-special. searches the text string which = "DESC" property value
            var searchAllText = $("#searchAll")[0].value.toLowerCase()
            
            if(eachProductProperty === undefined){}
            
            else if(typeof eachProductProperty === "string"){
//console.log("INSIDE STRING")
                if(searchAllText === ""){}
                else if(eachProductProperty.toLowerCase().search(searchAllText) > -1){
                    recArray.push(allPIndex)
                    return recArray
                }
            } else if(typeof eachProductProperty === "object"){
                if(searchAllText === "" || i >= eachProductProperty.length){return recArray}
                else if(eachProductProperty[i].toLowerCase().search(searchAllText) > -1){
//console.log("INSIDE ELSE IF")
                    recArray.push(allPIndex)
                    return recArray
                } else {
//console.log("INSIDE ELSE")
                    i +=1
                    return findALLMatches(eachProductProperty)
                }
            }
            
        return _.sortedUniq(recArray);

            } //ENDOF: FIND ALL MATCHES
        }) // ENDOF: ALLPRODUCT FOR EACH
        
        
        console.log(productHits)
        //Array of INDEXES of products NOT MATCHING SEARCH
        var hideArray = filterIndexes(productHits)
        //RESET ALL DIVS
        $("main div").show()
        
        //HIDE MATCHED DIVS
        if(hideArray !== undefined){
            hideArray.forEach(function(e, i, a){
                console.log(e,"value of e")
                $(".product-div-" + (e+1)).hide()
            }) 
        } else { 
            $("main div").show()
        }
        
        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        function filterIndexes(hits){
        var arr = [];
        var allIndexes = [0,1,2,3,4,5,6,7,8,9,10]
        var result  
        
          hits.forEach(function(e, i, a){
            allIndexes.forEach(function(v, i2){
              if(e === v){
                allIndexes.splice(i2, 1)
                result = allIndexes
              }
            })
          })
          
          return result
        }
        
        //return productHits
        
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
    
    
    
                    "3C-LOW TO HIGH BUTTON"
        var priceToggleFilter = "<button id='toggle-price-filter'>Price</button>"
        $("#search-div").append(priceToggleFilter)
        
        //3a. ONCLICK EVENT - can I use THIS or EVENT?? || YES for BOTH
        $("#toggle-price-filter").click(toggleClick)
        
        var priceCopy
        var prices
        //Only needed to run priceGetter ONCE
        //////////////////////////
        function priceGetter(){
            var allPrices = [] 
        
            prices = $("main div p:nth-child(3)").text().replace(/PRICE: \$/g, " ")
            prices = prices.split(" ").slice(1)
            
            priceCopy = []
            _.each(prices, function(e,i,a){
               priceCopy.push(prices[i] + " " + i)
               
               //IF no decimal, create one to place index at the very end of value
               //if(prices[i].indexOf(".") > -1){
               if(prices[i].indexOf(".") === -1){
                    prices[i] = Number(prices[i] + "." + i)
               } else if(prices[i].indexOf(".") > -1){
                    prices[i] = Number(prices[i] + i)
               } 
            })
        }
        
        priceGetter()
        //\\\\\\\\\\\\\\\\\\\\\\
        function toggleClick(){
 
            
            // //\\\\\\\\\\\\\\\\\\\\\           
            // function toggleORNah(p){
            //     //console.log(p,"before sort")
            //     var priceSort = p.sort(function(a, b){return a-b})
            //     var childTotal = $("main")[0].childElementCount
            //     var firstPrice = $("main div:nth-child(1) p:nth-child(3)")[0].innerText.replace("PRICE: $","")
            //     console.log(priceSort,"priceSort")
            //     console.log(firstPrice,"firstPrice")
                
            //     if(priceSort.toString().length > 4){
            //         var compare1 = priceSort[0].toString().slice(0, priceSort[0].toString().length)
            //         console.log(compare1,"compare1")
            //     } else if (priceSort.toString().length <= 4){
            //         var compare1 = priceSort[0].toString()
            //     }
                
            //     //IF FIRST PRICE IS THE LOWEST PRICE, REVERSE ORDER AND RETURN
            //     if(firstPrice === compare1){
            //         p = p.sort(function(a, b){return b-a})
            //         console.log(p,"toggle reverse")
            //         console.log(firstPrice)
            //     }
            //     //HIGHEST NUMBER HAS ADD DECIMAL POINT, NOT PRESENT IN JSON DATA - MAKE DYNAMIC
            //     else if(firstPrice === priceSort[priceSort.length-1].toString().slice(0, priceSort[priceSort.length-1].toString().length-2)){
            //         p = priceSort
            //         console.log(p,"toggle normal")
            //     }
            //     //console.log(p)
            //     return p
            // }
            
            //prices = toggleORNah(prices)
            var firstPrice = $("main div:nth-child(1) p:nth-child(3)")[0].innerText.replace("PRICE: $","")
            if(firstPrice === "7.99"){
                prices.sort(function(a, b){return b-a})
                reOrderByPrice(prices, priceCopy)
            } else {
                prices.sort(function(a, b){return a-b})
                reOrderByPrice(prices, priceCopy)
            }
            
            console.log(prices,"prices")
            console.log(priceCopy, "priceCopy")
           
           
           return prices
        }
        //toggleClick()   
        
        //reOrders DIVS
        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        function reOrderByPrice(p1, pcopy){
            _.each(p1, function(each, i){
                _.each(pcopy, function(pc1, index){
                    //ACCOUNTS FOR 0 -Number() doesn't like 0's
                    if(pc1.slice(-2) === " 0"){
                        if(each.toString() === pc1.slice(0, pc1.indexOf(" "))){
                            $(".product-div-" + (Number(pc1.slice(-1))+1)).appendTo("main")
                        }
                    //ACCOUNTS FOR 10 -Number() doesn't like 0's
                    } else if (pc1.slice(-2) === "10"){
                        if(each.toString() === pc1.slice(0, pc1.indexOf(" "))+1){
                            $(".product-div-" + (Number(pc1.slice(-2))+1)).appendTo("main")
                        }
                        
                    //DEALS WITH ALL OTHER CASES
                    //1. If number DOESN'T have decimal
                    } else if(pc1.indexOf(".") === -1){
                        if(each.toString() === pc1.slice(0, pc1.indexOf(" "))+ "." +pc1.slice(pc1.indexOf(" ")+1) ){
                            $(".product-div-" + (Number(pc1.slice(-1))+1)).appendTo("main")
                        } 
                    //2. If number DOES have decimal
                    } else if(pc1.indexOf(".") > -1){
                        if(each.toString() === pc1.slice(0, pc1.indexOf(" "))+pc1.slice(pc1.indexOf(" ")+1) ){
                            $(".product-div-" + (Number(pc1.slice(-1))+1)).appendTo("main")
                        }
                    }
                })
            })
        }
                    
                    
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
            "left":"25%", "width":"50%","height":"" ,
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
                var top = 0
                
                 //PARAGRAPH DIV
                $("#modal-content-div").append($("<div>").attr("id","modal-paras-div")
                .css({"position":"absolute","top":"5%","left":"30%","margin-right":"5%","width":"50%",
                    "margin-left":"10%"
                }))
                
                //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                allProducts[productIndex].specs.forEach(function(e, i, a){
                    console.log(e)
                    if(!e){console.log("There are no specs for this product")}
                    
                    $("#modal-paras-div")
                        .append($("<p>").text(e).addClass("modal-image-paras")
                        .css({position: "absolute", "top": top + "px"/*topIncrease + "px"*/, "z-index":"2",
                            "margin-top":"5px"
                    }))    
                    top = top + 30
                    console.log(top,"top")
                })
                
                //\\\\\\\\\\\\\\\\\\\\\
/*                function topIncreaser(top){
                    var newTop
                    
                    if(top === 0){return 0}
                    else if(top > 0){
                        //USED . -class operator instead of # operator
                        var syntax = "#modal-paras-div p:nth-child(000)".replace("000", top)
                        if($(syntax)[0] === undefined){console.log("syntax variable undefined","topIncrease STOPPED!"); return }
                        else{var previousTop = $(syntax)[0].clientHeight}
                        console.log(previousTop,"previousTop")
                        newTop = previousTop + 20
                    }
                        console.log(newTop,previousTop,"newTop+PREVIOUS")
                    return newTop
                }//ENDOF: topIncreaser*/
                
            } //ENDOF: Modal Data
            
            
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
            
            //Adds spec data from JSON as paragraphs to pop up MODAL
            modalData()
            
        //3c2 >> WINDOW RESIZE
            window.onresize = function(){
                var modContentH = $("#modal-content-div img")[0].clientHeight + 60
                $("#modal-content-div")[0].style.height = modContentH + "px"
                
                //reruns to resize
                //modalData()
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