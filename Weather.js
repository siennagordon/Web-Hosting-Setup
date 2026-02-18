$(document).ready(function() {

    $.getJSON("weather.json", function(data) {

        $("#cityName").text("Weather in " + data.name);
        $("#country").text(data.sys.country);
        $("#temp").text(data.main.temp + " K");
        $("#description").text(data.weather[0].description);
        $("#humidity").text(data.main.humidity + " %");
        $("#wind").text(data.wind.speed + " m/s");

    });

});
