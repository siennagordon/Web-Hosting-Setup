alert("JS loaded");
$(document).ready(function() {

    $.getJSON("Movie.json", function(data) {

        $("#title").text(data.Title);
        $("#year").text(data.Year);
        $("#genre").text(data.Genre);
        $("#director").text(data.Director);
        $("#actors").text(data.Actors);
        $("#rating").text(data.imdbRating);
        $("#plot").text(data.Plot);

    });

});
