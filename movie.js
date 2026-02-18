alert("JS loaded");
$(document).ready(function() {

    $.getJSON("movie.json", function(data) {

        $("#title").text(data.title);
        $("#year").text(data.year);
        $("#genre").text(data.genre);
        $("#director").text(data.director);
        $("#actors").text(data.actors);
        $("#rating").text(data.imdbRating);
        $("#plot").text(data.plot);

    });

});
