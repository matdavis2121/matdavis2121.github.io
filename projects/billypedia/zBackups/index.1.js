/* global $ _ opspark */
'use strict';
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        // let topRated = data.discography.topRated;
        // _.forEach(topRated, function(recording) {
        //     console.log(recording);
        // });
        
        let topRated = data.discography.topRated
        topRated.map(topBuilder)
        
        function topBuilder(e, i, a){
            //console.log(e.artist)
        
        let $mylist = $('<li>').attr('id', 'mylist' + i);
        $mylist.append($('<p>').text(e.title)).appendTo($('#list-top-rated'));
        $mylist.append($('<p>').text(e.artist)).appendTo($('#list-top-rated'));
        $mylist.append($('<p>').text(e.releases)).appendTo($('#list-top-rated'));
        $mylist.append($('<p>').text(e.year)).appendTo($('#list-top-rated'));
        
        // "IN CLASS WITH LIV"
        // var $recordSection = $("#sidebar").append($("<section>"))
        //     $("#sidebar").append(makeList(topRated)
        // var $list = $("<ul>")
        
        
        
        
        // function makeList(content){
        //     var $list = $("<ul>")
        //     _.forEach(content, function(recording){
        //         $("<li>").text(recording.title).appendTo($list);
        //     })
        //     return $list;
        // }
            
        }
        
        
        
        
                
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});

