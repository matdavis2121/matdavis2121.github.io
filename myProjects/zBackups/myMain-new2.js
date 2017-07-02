/* global $ _ opspark */
'use strict';

/*-----------------------LEGEND-----------------------*/
/*  1. FUNCTION(defined/called) = ////////////////////////////
    2. CODE SECTION TITLES      =  "/* ---# SECTION--- *\"     
    3. CODE SECTIONS            = 1A, 2B, 3C
    4. CODE subSections         = a,b,c 
    5. section space            = 2 full lines between each section for visibility
*/


$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        
    /* ------------1. HEADER SECTION -----------*/
    /* CREATED: HTML tag, HEAD tag, JQuery CDN script, JS File script in index.1.html*/
    
////////////////////////////////////////////// 
//1A. FUNCTION that makes head links and scripts
function autoHeadMaker(){
    var $allHeadTags = $("head").html() 
    var $head = $("head")
    var charMeta = '<meta charset="utf-8">'
    var viewMeta = '<meta name="viewport" content="width=device-width">'
    
    //HTML STRINGS
    var googleFontsLink1 = '<link href="https://fonts.googleapis.com/css?family=Fira+Sans|Pacifico" rel="stylesheet">'
    var myStyleSheet = '<link rel="stylesheet" href="mySite.css" type="text/css" />'
    var myLodash = '<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash-compat/3.10.2/lodash.min.js"></script>'
    
    //a. TAGS - title, meta-viewport, meta-char
    $("<title>").text("Billypedia").appendTo("head")
    $("head").append(viewMeta, charMeta)
    
    //b. LINKS + SCRIPTS - googleFonts, css, lodash
    $head.append(googleFontsLink1, myStyleSheet, myLodash)
}
    //1B. CALLING: the function/////////////////
    autoHeadMaker()
    
    
    /* ------------2. BODY + NAV SECTION -----------*/
    /* ERROR: Created duplicate body element - duplicate elements recurring issue?*/
    //var $myBody = $("<body>").appendTo("html")
    
    //2A. CREATING: Nav elements - div, nav, ul, li, a, spans
    $("body").append("<div id='all-contents'></div>") //.appendTo("body")
    $("<nav>").appendTo("#all-contents")
    $("<ul>").appendTo("nav")
    //a. creating list item for navigation +  appending <a> and <span> to > ul
    $("<li>")
        .append($("<a>")
        .attr("href", "index.1.html"))
        .append('<span id="name1">Billy</span><span id="name2">pedia</span>')
        .appendTo($("nav ul"));
    
    
    /* ------------3. MAIN SECTION -----------*/
    //3A. CREATING: SIDEBAR
    "TIP - multiple attributes vs. multiple css"
        "1. attr only has quotes around value -- 2. css has quotes around both"
        //ex.1 .attr({ id: "test", class: "all-tests" })
        //ex.2 .css({ "color": "red", "width": "100px" })
    
    //a. sidebar > div || image container > div || billy's > img
    $("<main>")
    .append($("<div>").attr({id: "sidebar", class: "sidebar"}))
        //a1. Prepended img div container to > sidebar div
        .prepend($("<div>").attr({id: "image-container-billy", class: "image-container"}))
        .appendTo("#all-contents");
        
        //a2. Appended img element inside > img div container
        ($("<img>").attr({id: "image-billy", src: "images/billy/billy-0.jpg", class: "image", i:"0"}))
        .css({"width":"25%"}).appendTo("#image-container-billy")
    
    //b. top rated > section || top rated > header || list-top-rated > ul || AppendedTo > sidebar(div)
        var sidebarSection1 = "<section id='section-top-rated' class='recordings'></section>"
        var sidebarHeader1 = "<header id='header-top-rated' class='header-recordings'>Top Rated</header>"
        var sidebarUL1 = "<ul id='list-top-rated' class='list-recordings'></ul>"
        
        //b1. Appends top rated section to sidebar
        //SIDEBAR = Entire Div that contains (billy's image, section-top-rated ul, album details list-items)
        $("#sidebar").append(sidebarSection1)
        $("#section-top-rated").append(sidebarHeader1, sidebarUL1)
    
    
    /* ------------4. CONTENT SECTION -----------*/
    //4A. CREATING: CONTENT (div) - a. h2, div - b. section, section, section
        //a. CONTENT DIV: Houses "sections" div and all it's contents -- appendedTo MAIN
        var $contentDiv = $("<div>").addClass("content").appendTo("main")
        //b. header
        $("<h2>").addClass("heading").addClass("heading-article")
        .text("Billy Higgins").appendTo($contentDiv)
    
    //4B. SECTIONS DIV: Houses each section
        var $sectionsDiv = $("<div>").attr("id", "sections").appendTo($contentDiv)
        
        //4B1. SECTION-1: Section Bio------------------------------
        //a. All P elements text
        var p1a = "Higgins was born in Los Angeles, California." +
                    "Higgins played on Ornette Coleman's first records, beginning in 1958. " +
                    "He then freelanced extensively with hard bop and other " +
                    "post-bop players, including Donald Byrd, Dexter Gordon, Grant Green,  " +
                    "Joe Henderson, Paul Horn, Milt Jackson, Jackie McLean, Pat Metheny, " +
                    "Hank Mobley, Thelonious Monk, Lee Morgan, David Murray, Art Pepper, " +
                    "Sonny Rollins, Mal Waldron, and Cedar Walton. " +
                    "He was one of the house drummers for Blue Note Records " +
                    "and played on dozens of Blue Note albums of the 1960s." 
        var p1b = "On a whole, he played on over 700 recordings, including recordings of rock and funk." + 
                    "He appeared as a jazz drummer in the 2001 movie Southlander."
        var p1c = "In 1989, Higgins cofounded a cultural center, The World Stage, in" +
                    "Los Angeles to encourage and promote younger jazz musicians. " +
                    "The center provides workshops in performance and writing, as well as concerts and recordings. " +
                    "Higgins also taught in the jazz studies program at the University of California, Los Angeles."
        var p1d = "He was divorced from wife Mauricina Altier Higgins and had three sons," + 
                    "William, Joseph, and David, as well as a stepson Jody. " +
                    "His youngest son Benjamin resides in Los Angeles. " +
                    "He also had two daughters, Rickie Wade and Heidi. " +
                    "He died of kidney and liver failure on May 3, 2001 at a hospital " +
                    "in Inglewood, California."
        //PARAGRAPH CLONES
        var $pCloner1 = $("<p>").addClass("bio")
            var $p1aClone = $pCloner1.clone().text(p1a)
            var $p1bClone = $pCloner1.clone().text(p1b)
            var $p1cClone = $pCloner1.clone().text(p1c)
            var $p1dClone = $pCloner1.clone().text(p1d)
        //b. 1st Section - SECTION BIO - appendedTo sectionsDiv
            var $sectionBio = $("<section>").attr("id", "section-bio").appendTo($sectionsDiv)
        //c. Header || All P elements being appendedTo Section Bio 
            $("<h3>").text("Bio").appendTo($sectionBio)
            //All P elements
            $sectionBio.append($p1aClone,$p1bClone,$p1cClone,$p1dClone)
            
    
        //4B2. SECTION-2: Section Praise------------------------------
        //a. All P elements text
        var p2a = "Charles Lloyd is speaking of the late master drummer: Billy Higgins."
        var p2b = "Let me tell you something: He had the dance-the dance of life." + 
                    "He was a beautiful soul who graced this planet and made it a better place. " +
                    "You know the same sun shines everywhere, but its manifestation in some places is stronger. " +
                    "Billy's spirit was so like that, so all-embracing. I feel him more than ever, " +
                    "but at the same time, I feel protective or something."
        var p2c = "I remember we were getting ready to do a take of 'Dorotea's Studio'" +
                    " [from Voice in the Night], and Billy was looking up at the ceiling. " +
                    "I said, 'What's happening, Master Higgins?' " +
                    "He said, 'I'm trying to think what to play here.' " +
                    "I'd never seen him do that. He said, 'OK,' and played this incredible march. " +
                    "Here's this little Spanish song, and he played dut-dut-dut. " +
                    "It was just swinging, just dancing. " +
                    "That's what he does-he just comes up with what's needed."
        //PARAGRAPH CLONES                    
        var $pCloner2 = $("<p>").addClass("praise")
            var $p2aClone = $pCloner2.clone().text(p2a)
            var $p2bClone = $pCloner2.clone().text(p2b)
            var $p2cClone = $pCloner2.clone().text(p2c)
        //b. 1st Section - SECTION BIO - appendedTo sectionsDiv
            var $sectionPraise = $("<section>").attr("id", "section-praise").appendTo($sectionsDiv)
        //c. Header || All P elements being appendedTo Section Bio 
            $("<h3>").text("Praise for Billy Higgins").appendTo($sectionPraise)
            //All P elements
            $sectionPraise.append($p2aClone,$p2bClone,$p2cClone)

    
        //4B3. SECTION-3: Section Quotes------------------------------
        //a. All P elements text
        var p3a = "The people in Japan know more about the history of jazz and the musicians" + 
                    "than the people in the United States do!"
        var p3b = "It doesn't have anything to do with yesterday or tomorrow, it's all right now."
        var p3c = "When I was a little kid they'd say" + 
                    "'Little boy, what are you gonna be when you grow up?' I said, 'I'm gonna play the drums.' " +
                    "They said, 'No, no, no, no. What do you really want to be?'"
        //PARAGRAPH CLONES-3                    
        var $pCloner3 = $("<p>").addClass("praise")
            var $p3aClone = $pCloner3.clone().text(p3a)
            var $p3bClone = $pCloner3.clone().text(p3b)
            var $p3cClone = $pCloner3.clone().text(p3c)
        //b. 1st Section - SECTION BIO - appendedTo sectionsDiv
            var $sectionQuotes = $("<section>").attr("id", "section-quotes").appendTo($sectionsDiv)
        //c. Header || All P elements being appendedTo Section Bio 
            $("<h3>").text("Quotes by Billy Higgins").appendTo($sectionQuotes)
            //All P elements
            $sectionQuotes.append($p3aClone,$p3bClone,$p3cClone)
            
        /* --------------5. COMMENTS ENDING DIVS------------*/     
        $("#sections").html(function(){this.outerHTML = this.outerHTML + "<!-- END OF SECTIONS-->"})
        $(".content").html(function(){this.outerHTML = this.outerHTML + "<!-- END OF CONTENT-->"})    
            
            
/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/            
    /*--------------------------- TESTING----------------------------*/    
            /* DETAILS ARE COMMENTS AND ALL CODE IS QUOTED*/
    //1A. HOW TO ADD SPAN TAGS AROUND INNERT TEXT
        //a. Create p element and text >> appendTo body
            '//$("<p>").text("Hey you welcome!").appendTo("body")'
        
        //b. Completely replace innerHTML using jQuery html function
            '//$("p:contains(\'welcome\')").html("<span>welcome!</span>")'
        
        //c. OR Use the function argument + .replace to target the word 
            '//$("p:contains(\'welcome\')")'
            '//.html(function(index, old){'
            '//return old.replace("welcome", "<span>welcome</span>")})      '
            
        //d. OR Use split and join on the oldhtml jQuery argument
            '//$("p:contains(\'welcome\')")'
            '//.html(function(index, old){'
            '//return old.split("welcome").join("<span>welcome</span>") })  '
    
    //2A. TESTING OUT APPEND
        //a. APPEND TEST: appending still places element inside at end -- when does it place it outside?
        //b. ONE INSTANCE of append, appends element inside, at end of targeted matched set
            '$("#image-container-billy").append($("<img>"))'
    
    //3A. APPEND AND APPENDTO TEST
        //3a. APPENDING back to back causes siblings, NOT parent > child relationship (outside of element)
        //3b. If I wanted the 2nd paragraph inside the 1st, I'd >> APPENDTO
            '$(".Hello")'
            ".append(\"<p class='p-123'></p>\")"
            ".append(\"<p class='p-345'></p>\")"
        //RESULT IS 2 SIBLINGS
            "<p class='p-123'></p>"
            "<p class='p-345'></p>"
            
        //3c. Places the 2nd p element inside the 1st
            "$(\"p[class='345']\").appendTo(\"p[class='p-123']\")"
        //RESULT IS PARENT AND CHILD
            "<p class='p-123'>"
                "<p class='p-345'></p>"
            "</p>"
    //4A. ADDING CLASSES VS. SETTING THE CLASS ATTR    
        //4a. Multiple classes can be added using ADDCLASS and statement chaining
            '$("<h2>").addClass("heading").addClass("heading-article").appendTo($contentDiv)'
    
    
    
    
    
    
    
        
    }) //ENDOF: document ready and getJSON
    
})