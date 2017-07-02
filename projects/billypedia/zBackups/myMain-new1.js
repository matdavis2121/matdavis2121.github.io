/* global $ _ opspark */
'use strict';
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
/* REQUIREMENTS FOR NEW SITE DEFAULTS USING ALL JQUERY*/
/*  1. Head tag
    2. jquery CDN // script tag
    3. link to js file aka main.js // script tag
    4. 
*/

    //$("<title>").text("Boo2!").appendTo("head")   
    $("<p>").text("I'M A P").appendTo("body")
            
            
        
        
        
        
        
                
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});

