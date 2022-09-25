"use strict";
// 
let api_key = 'c5xxNx9T3HVrZ3aC8olpqdZacjnWCoOHLTWRYAxu';
$.ajax({
    url: ("https://api.nasa.gov/planetary/apod?api_key=" + api_key),
    dataType: "json",
    success: function (data) {
        $('.nasaTitle').text(data.title);
        $('.nasaDesc').text(data.explanation);
        $('.nasaContent').html('<img src="' + data.hdurl + '" alt="' + data.title + '"/>');
    }
});
/*
Improvement plans:

Alt text
The alt text will get the media type and then say the title. Ex "A video of Jupiter", "An image of Cool Nebula"
*/
