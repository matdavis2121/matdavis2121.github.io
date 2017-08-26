/*TO DO LIST
1. Make left border the colorhex of the color property
2. add onchange for select
3. add onhover for and onclick for closer

4. Make focus on the select so you can use the down arrow on display
5. 

*/

var title = document.querySelector("h1")
title.onmouseover = function(e){
    //console.log("OVER TITLE")
    
    var colorPopup = document.querySelector("#customization-wrapper")
    colorPopup.style.display = "block"
    //document.querySelector("#default-colors").autofocus

}

title.onmouseout = function(e){
    //console.log("OVER TITLE")
    var colorPopup = document.querySelector("#customization-wrapper")
    //colorPopup.style.display = "none"
}

createPopUp(title)
function createPopUp(titleElement){
    var divNode = document.createElement("DIV")
    var parent = titleElement.parentElement
    
    divNode.id = "customization-wrapper"
    divNode.style = "width: 280px;height: 65px;position: absolute;top: -5%;right: 31%;background-color: #00ab6b;color: white;" +
                    "display: none;border-radius: 10px;box-shadow: 3px 5px 9px 0px rgba(0, 0, 0, 0.32);"
    
    var p1 = "<p>COLOR</p>"  
    var closeButton = "<button id='colorpopup-close-button' class='color-popup' style=\"font-size: 12px;background-color: rgb(255, 100, 100);position: absolute;"+
                        "right: 0px;margin-top: 5px;margin-right: 7px;border-radius: 15px;" +    
                        "border-style: none;box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.52);z-index:1\">X</button>"
    var colorPopupTitle = "<h3 id='colorPopup-title' class='color-popup' style='font-size: medium; position: relative; text-align: center; top: 4px;'>Title Color</h3>"

    divNode.innerHTML = closeButton + "\r" + colorPopupTitle + "\r" + createColorSelect()
    
    parent.prepend(divNode)

    document.querySelector("#default-colors").addEventListener("change", function(){
        this.style.borderLeft = "10px solid " + this.value;

        var title = document.querySelector("h1")
        title.style.color = this.value
    })
            
    document.querySelector("#colorpopup-close-button").addEventListener("mouseover", closeHoverToggle)
    document.querySelector("#colorpopup-close-button").addEventListener("mouseout", closeHoverToggle)
    function closeHoverToggle(){
        if(this.style.backgroundColor === "rgb(255, 100, 100)"){this.style.backgroundColor = "rgb(249, 13, 13)"}
        else{this.style.backgroundColor = "rgb(255, 100, 100)"}
    }

    document.querySelector("#colorpopup-close-button").addEventListener("click", function(){        
        document.querySelector("#customization-wrapper").style.display = "none"
    })

} //ENDOF: Create popup filter


function createColorSelect(){
    //<select>  </select>
    var defaultColors = [
    {
        "column0": "AliceBlue",
        "column1": "#F0F8FF"
    },
    {
        "column0": "AntiqueWhite",
        "column1": "#FAEBD7"
    },
    {
        "column0": "Aqua",
        "column1": "#00FFFF"
    },
    {
        "column0": "Aquamarine",
        "column1": "#7FFFD4"
    },
    {
        "column0": "Azure",
        "column1": "#F0FFFF"
    },
    {
        "column0": "Beige",
        "column1": "#F5F5DC"
    },
    {
        "column0": "Bisque",
        "column1": "#FFE4C4"
    },
    {
        "column0": "Black",
        "column1": "#000000"
    },
    {
        "column0": "BlanchedAlmond",
        "column1": "#FFEBCD"
    },
    {
        "column0": "Blue",
        "column1": "#0000FF"
    },
    {
        "column0": "BlueViolet",
        "column1": "#8A2BE2"
    },
    {
        "column0": "Brown",
        "column1": "#A52A2A"
    },
    {
        "column0": "BurlyWood",
        "column1": "#DEB887"
    },
    {
        "column0": "CadetBlue",
        "column1": "#5F9EA0"
    },
    {
        "column0": "Chartreuse",
        "column1": "#7FFF00"
    },
    {
        "column0": "Chocolate",
        "column1": "#D2691E"
    },
    {
        "column0": "Coral",
        "column1": "#FF7F50"
    },
    {
        "column0": "CornflowerBlue",
        "column1": "#6495ED"
    },
    {
        "column0": "Cornsilk",
        "column1": "#FFF8DC"
    },
    {
        "column0": "Crimson",
        "column1": "#DC143C"
    },
    {
        "column0": "Cyan",
        "column1": "#00FFFF"
    },
    {
        "column0": "DarkBlue",
        "column1": "#00008B"
    },
    {
        "column0": "DarkCyan",
        "column1": "#008B8B"
    },
    {
        "column0": "DarkGoldenRod",
        "column1": "#B8860B"
    },
    {
        "column0": "DarkGray",
        "column1": "#A9A9A9"
    },
    {
        "column0": "DarkGrey",
        "column1": "#A9A9A9"
    },
    {
        "column0": "DarkGreen",
        "column1": "#006400"
    },
    {
        "column0": "DarkKhaki",
        "column1": "#BDB76B"
    },
    {
        "column0": "DarkMagenta",
        "column1": "#8B008B"
    },
    {
        "column0": "DarkOliveGreen",
        "column1": "#556B2F"
    },
    {
        "column0": "DarkOrange",
        "column1": "#FF8C00"
    },
    {
        "column0": "DarkOrchid",
        "column1": "#9932CC"
    },
    {
        "column0": "DarkRed",
        "column1": "#8B0000"
    },
    {
        "column0": "DarkSalmon",
        "column1": "#E9967A"
    },
    {
        "column0": "DarkSeaGreen",
        "column1": "#8FBC8F"
    },
    {
        "column0": "DarkSlateBlue",
        "column1": "#483D8B"
    },
    {
        "column0": "DarkSlateGray",
        "column1": "#2F4F4F"
    },
    {
        "column0": "DarkSlateGrey",
        "column1": "#2F4F4F"
    },
    {
        "column0": "DarkTurquoise",
        "column1": "#00CED1"
    },
    {
        "column0": "DarkViolet",
        "column1": "#9400D3"
    },
    {
        "column0": "DeepPink",
        "column1": "#FF1493"
    },
    {
        "column0": "DeepSkyBlue",
        "column1": "#00BFFF"
    },
    {
        "column0": "DimGray",
        "column1": "#696969"
    },
    {
        "column0": "DimGrey",
        "column1": "#696969"
    },
    {
        "column0": "DodgerBlue",
        "column1": "#1E90FF"
    },
    {
        "column0": "FireBrick",
        "column1": "#B22222"
    },
    {
        "column0": "FloralWhite",
        "column1": "#FFFAF0"
    },
    {
        "column0": "ForestGreen",
        "column1": "#228B22"
    },
    {
        "column0": "Fuchsia",
        "column1": "#FF00FF"
    },
    {
        "column0": "Gainsboro",
        "column1": "#DCDCDC"
    },
    {
        "column0": "GhostWhite",
        "column1": "#F8F8FF"
    },
    {
        "column0": "Gold",
        "column1": "#FFD700"
    },
    {
        "column0": "GoldenRod",
        "column1": "#DAA520"
    },
    {
        "column0": "Gray",
        "column1": "#808080"
    },
    {
        "column0": "Grey",
        "column1": "#808080"
    },
    {
        "column0": "Green",
        "column1": "#008000"
    },
    {
        "column0": "GreenYellow",
        "column1": "#ADFF2F"
    },
    {
        "column0": "HoneyDew",
        "column1": "#F0FFF0"
    },
    {
        "column0": "HotPink",
        "column1": "#FF69B4"
    },
    {
        "column0": "IndianR",
        "column1": "Â  #CD5C5C"
    },
    {
        "column0": "Indi",
        "column1": "Â  #4B0082"
    },
    {
        "column0": "Ivory",
        "column1": "#FFFFF0"
    },
    {
        "column0": "Khaki",
        "column1": "#F0E68C"
    },
    {
        "column0": "Lavender",
        "column1": "#E6E6FA"
    },
    {
        "column0": "LavenderBlush",
        "column1": "#FFF0F5"
    },
    {
        "column0": "LawnGreen",
        "column1": "#7CFC00"
    },
    {
        "column0": "LemonChiffon",
        "column1": "#FFFACD"
    },
    {
        "column0": "LightBlue",
        "column1": "#ADD8E6"
    },
    {
        "column0": "LightCoral",
        "column1": "#F08080"
    },
    {
        "column0": "LightCyan",
        "column1": "#E0FFFF"
    },
    {
        "column0": "LightGoldenRodYellow",
        "column1": "#FAFAD2"
    },
    {
        "column0": "LightGray",
        "column1": "#D3D3D3"
    },
    {
        "column0": "LightGrey",
        "column1": "#D3D3D3"
    },
    {
        "column0": "LightGreen",
        "column1": "#90EE90"
    },
    {
        "column0": "LightPink",
        "column1": "#FFB6C1"
    },
    {
        "column0": "LightSalmon",
        "column1": "#FFA07A"
    },
    {
        "column0": "LightSeaGreen",
        "column1": "#20B2AA"
    },
    {
        "column0": "LightSkyBlue",
        "column1": "#87CEFA"
    },
    {
        "column0": "LightSlateGray",
        "column1": "#778899"
    },
    {
        "column0": "LightSlateGrey",
        "column1": "#778899"
    },
    {
        "column0": "LightSteelBlue",
        "column1": "#B0C4DE"
    },
    {
        "column0": "LightYellow",
        "column1": "#FFFFE0"
    },
    {
        "column0": "Lime",
        "column1": "#00FF00"
    },
    {
        "column0": "LimeGreen",
        "column1": "#32CD32"
    },
    {
        "column0": "Linen",
        "column1": "#FAF0E6"
    },
    {
        "column0": "Magenta",
        "column1": "#FF00FF"
    },
    {
        "column0": "Maroon",
        "column1": "#800000"
    },
    {
        "column0": "MediumAquaMarine",
        "column1": "#66CDAA"
    },
    {
        "column0": "MediumBlue",
        "column1": "#0000CD"
    },
    {
        "column0": "MediumOrchid",
        "column1": "#BA55D3"
    },
    {
        "column0": "MediumPurple",
        "column1": "#9370DB"
    },
    {
        "column0": "MediumSeaGreen",
        "column1": "#3CB371"
    },
    {
        "column0": "MediumSlateBlue",
        "column1": "#7B68EE"
    },
    {
        "column0": "MediumSpringGreen",
        "column1": "#00FA9A"
    },
    {
        "column0": "MediumTurquoise",
        "column1": "#48D1CC"
    },
    {
        "column0": "MediumVioletRed",
        "column1": "#C71585"
    },
    {
        "column0": "MidnightBlue",
        "column1": "#191970"
    },
    {
        "column0": "MintCream",
        "column1": "#F5FFFA"
    },
    {
        "column0": "MistyRose",
        "column1": "#FFE4E1"
    },
    {
        "column0": "Moccasin",
        "column1": "#FFE4B5"
    },
    {
        "column0": "NavajoWhite",
        "column1": "#FFDEAD"
    },
    {
        "column0": "Navy",
        "column1": "#000080"
    },
    {
        "column0": "OldLace",
        "column1": "#FDF5E6"
    },
    {
        "column0": "Olive",
        "column1": "#808000"
    },
    {
        "column0": "OliveDrab",
        "column1": "#6B8E23"
    },
    {
        "column0": "Orange",
        "column1": "#FFA500"
    },
    {
        "column0": "OrangeRed",
        "column1": "#FF4500"
    },
    {
        "column0": "Orchid",
        "column1": "#DA70D6"
    },
    {
        "column0": "PaleGoldenRod",
        "column1": "#EEE8AA"
    },
    {
        "column0": "PaleGreen",
        "column1": "#98FB98"
    },
    {
        "column0": "PaleTurquoise",
        "column1": "#AFEEEE"
    },
    {
        "column0": "PaleVioletRed",
        "column1": "#DB7093"
    },
    {
        "column0": "PapayaWhip",
        "column1": "#FFEFD5"
    },
    {
        "column0": "PeachPuff",
        "column1": "#FFDAB9"
    },
    {
        "column0": "Peru",
        "column1": "#CD853F"
    },
    {
        "column0": "Pink",
        "column1": "#FFC0CB"
    },
    {
        "column0": "Plum",
        "column1": "#DDA0DD"
    },
    {
        "column0": "PowderBlue",
        "column1": "#B0E0E6"
    },
    {
        "column0": "Purple",
        "column1": "#800080"
    },
    {
        "column0": "RebeccaPurple",
        "column1": "#663399"
    },
    {
        "column0": "Red",
        "column1": "#FF0000"
    },
    {
        "column0": "RosyBrown",
        "column1": "#BC8F8F"
    },
    {
        "column0": "RoyalBlue",
        "column1": "#4169E1"
    },
    {
        "column0": "SaddleBrown",
        "column1": "#8B4513"
    },
    {
        "column0": "Salmon",
        "column1": "#FA8072"
    },
    {
        "column0": "SandyBrown",
        "column1": "#F4A460"
    },
    {
        "column0": "SeaGreen",
        "column1": "#2E8B57"
    },
    {
        "column0": "SeaShell",
        "column1": "#FFF5EE"
    },
    {
        "column0": "Sienna",
        "column1": "#A0522D"
    },
    {
        "column0": "Silver",
        "column1": "#C0C0C0"
    },
    {
        "column0": "SkyBlue",
        "column1": "#87CEEB"
    },
    {
        "column0": "SlateBlue",
        "column1": "#6A5ACD"
    },
    {
        "column0": "SlateGray",
        "column1": "#708090"
    },
    {
        "column0": "SlateGrey",
        "column1": "#708090"
    },
    {
        "column0": "Snow",
        "column1": "#FFFAFA"
    },
    {
        "column0": "SpringGreen",
        "column1": "#00FF7F"
    },
    {
        "column0": "SteelBlue",
        "column1": "#4682B4"
    },
    {
        "column0": "Tan",
        "column1": "#D2B48C"
    },
    {
        "column0": "Teal",
        "column1": "#008080"
    },
    {
        "column0": "Thistle",
        "column1": "#D8BFD8"
    },
    {
        "column0": "Tomato",
        "column1": "#FF6347"
    },
    {
        "column0": "Turquoise",
        "column1": "#40E0D0"
    },
    {
        "column0": "Violet",
        "column1": "#EE82EE"
    },
    {
        "column0": "Wheat",
        "column1": "#F5DEB3"
    },
    {
        "column0": "White",
        "column1": "#FFFFFF"
    },
    {
        "column0": "WhiteSmoke",
        "column1": "#F5F5F5"
    }
];
     
    var allColorsHTML = defaultColors.reduce(function(p,obj,i){
        return p + optionCreator(obj.column1, obj.column0) + "\r"      
    },"");
    
    //////////////////////////////////////////
    function optionCreator(colorHEX,colorName){
        //NOT: Possible to style the option element
        //var opBGColor = "style='background-color: rgba(255, 255, 255, 0.51); border-left: 10px solid " + colorHEX + ";'"

        var op = "<option " + "value=" + colorHEX + ">" + colorName + "</option>"
        return op
    }
    
    return "<select id='default-colors' autofocus style=\"color: #29211b;position: relative;margin-top: 5px;margin-left: 31px;background-color: rgba(255, 255, 255, 0.51);font-size: large;" +
    "border-left: 10px solid #F0F8FF;\"" +
    ">" + "\r" + allColorsHTML + "\r" + "</select>"
} //ENDOF: Create color select






/*
1. Look into the difference between explicitly creating nodes VS. using plain HTML to create everything for us
*/