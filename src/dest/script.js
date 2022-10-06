"use strict";
// 
let api_key = 'c5xxNx9T3HVrZ3aC8olpqdZacjnWCoOHLTWRYAxu';
$.ajax({
    url: ("https://api.nasa.gov/planetary/apod?api_key=" + api_key),
    dataType: "json",
    success: function (data) {
        $('.nasaTitle').text(data.title);
        $('.nasaDesc').text(data.explanation);
        if (data.media_type === 'video') {
            $('.nasaContent').html('<video src="' + data.url + '" alt="The ' + data.media_type + ' of ' + data.title + '"/>');
        } else {
            $('.nasaContent').html('<img src="' + data.hdurl + '" alt="The ' + data.media_type + ' of ' + data.title + '"/>');
        };
        $('.nasaDate').text(data.date);
    }
});
