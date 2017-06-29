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
        // $mylist.append($('<p>').text(e.artist)).appendTo($('#list-top-rated'));
        // $mylist.append($('<p>').text(e.releases)).appendTo($('#list-top-rated'));
        // $mylist.append($('<p>').text(e.year)).appendTo($('#list-top-rated'));
        
        }
        
        /*------------ #5. POPULATE GENERAL RECORDINGS LIST---------------*/
        var generalRecSection = $("<section>").attr("id", "section-recordings")
        var generalRecUL = $("<ul>").attr("id", "list-recordings")
        var generalHeader = $("<header>").attr({id: "header-general-recordings", class: "general recordings" }).text("General Recordings")
        
        generalRecSection.appendTo($("#sidebar"))
        generalHeader.appendTo(generalRecSection)
        generalRecUL.appendTo(generalRecSection)
        
        var genRecs = data.discography.recordings
        genRecs.map(generalRecordings)
        //////////////////////////////////////////////////////////////////////////
        function generalRecordings(e, i, a){
            var generalRecLI = $("<li>").addClass("recording")
            
            generalRecLI.append($("<div>").addClass("title").text("Title: " + e.title)).appendTo(generalRecUL)
            generalRecLI.append($("<div>").addClass("artist").text("Artist: " + e.artist)).appendTo(generalRecUL)
            generalRecLI.append($("<div>").addClass("release").text("Release: " + e.release)).appendTo(generalRecUL)
            generalRecLI.append($("<div>").addClass("year").text("Year: " + e.year)).appendTo(generalRecUL)
            //generalRecLI.appendTo($("#list-recording"))
        }
        
        /*------------ #6. IMG TAGS FOR BOTH SECTIONS---------------*/
        var Recordings = data.discography.recordings
        var imgDiv1 = $("<div>").attr({id: "image-container-recording-top", class: "image-container"})
        var imgDiv2 = $("<div>").attr({id: "image-container-recording", class: "image-container"})
        var imgTopRatedList = $("<img>").attr({id: "recording-image1", src: topRated[0].art})
        var imgRecordingList = $("<img>").attr({id: "recording-image2", src: Recordings[0].art})
        
        imgDiv1.append(imgTopRatedList).prependTo("#section-top-rated")
        imgDiv2.append(imgRecordingList).prependTo("#section-recordings")
                
                
        /*------------ #7. DYNAMICALLY SWAP IMAGES- "06/28/2017 05:16:20"--------------*/                
        $("#image-billy").on("click", clickSwap)
        var billyImages = data.images.billy
        
        //ADDED TO MAINTAIN SPACE AS IMAGES FADE IN AND FADE OUT
        $("#image-billy").css({"height":"200px", "width": "200px"})
        $("#image-container-billy").css({"height":"200px", "width": "200px", "margin-bottom":"15px"})
        
        $("#recording-image1").css({"height":"200px", "width": "200px"})
        $("#image-container-recording").css({"height":"200px", "width": "200px", "margin-bottom":"15px"})

        
        $("#recording-image2").css({"height":"200px", "width": "200px"})
        $("#image-container-recording-top").css({"height":"200px", "width": "200px", "margin-bottom":"15px"})
        //////////////////////////////////////////////////////////
        function clickSwap(e){
            var i = $("#image-billy").attr("src")
            i = Number(i.slice(-5, -4))
            i+=1
            if(i === 4){i = 0}
            
            $("#image-billy").css("display","none")
            $("#image-billy").attr("src", billyImages[i]).fadeIn(1000)
            
            console.log("8. SUCCESSFULLY CLICKed")
        }
        
        /*------------ #8. LI CLICK. --------------*/                        
        $("#sidebar li").on("click", updatePhoto)
        $("#sidebar li").css("cursor", "pointer")
        $("#list-top-rated li").addClass("top-rated-list-items")
function updatePhoto(e){
        //1. ALL VARS    
        var myTitle = e.target.textContent;
        myTitle = myTitle.slice(myTitle.indexOf(" ") + 1)
        
        var recordClass = e.target.className
        var topRated = e.target.textContent
        
        //2. ARRAY OF OBJECTS
        var allRecordings = data.discography.recordings
        var allTopRated = data.discography.topRated
        
        console.log(e)
        //3. CONDITIONALs - TOP RATED or GENERAL RECORDINGS?
        if(e.currentTarget.className === "recording"){
            allRecordingsPic()
        } else if (e.currentTarget.className === "top-rated-list-items") {
            topRatedPic()
            console.log( myTitle)
        }
        
        
////////////////////////////////////////////////////////////////////
    function topRatedPic(){
        allTopRated.forEach(function(album, i, a){
            myTitle = e.target.textContent; 
            if(myTitle === album.title) {
                $("#recording-image1").attr("src", album.art)
                // $("#recording-image1").fadeOut(100)
                $("#recording-image1").css("display", "none")
                $("#recording-image1").fadeIn(1000)
                console.log("TOP RATED PIC IF")
            }
        })
    }
    
    function allRecordingsPic(){
        allRecordings.forEach(function(album, i, a){
            if(myTitle === album[recordClass].toString()){
                
                $("#recording-image2").fadeOut(100)
                $("#recording-image2").attr("src", album.art).fadeIn(1000)
            }
        })
    }
    
} //END OF UPDATEPHOTP
        
        /*------------ #9. TABULAR DATA. --------------*/   
        var myRiderdetails = data.rider
        var myRider = $("<section>").attr({class: "Rider", id: "billys-rider"}).appendTo("#sections")
        myRider.append($("<h3>").text("Billy's Rider"))
    ///////////////////////////////////////////////////////////////////////////        
    var createTable = function(fullRider){
    var createRow = function(riderDetails){
    var $row = $("<tr>");
    var $type = $("<td>").text(riderDetails.type);
    var $description = $("<td>").text(riderDetails.desc);
    $row.append($type);
    $row.append($description);
    return $row;
    }
    var $table = $("<table>");
    var $rows = fullRider.map(createRow);
    $table.append($rows);
    return $table;
};

createTable(myRiderdetails).appendTo("#billys-rider");
        
        
        
        
        
        
        
// });
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});

