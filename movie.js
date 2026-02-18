$(document).ready(function() {

    $.getJSON("movie.json", function(data) {

        console.log(data); // leave this for debugging

        $("#title").text(data.title);
        $("#year").text(data.year);
        $("#rating").text(data.mpaa_rating);
        $("#runtime").text(data.runtime + " minutes");
        $("#studio").text(data.studio);
        $("#synopsis").text(data.synopsis);

        // Genres (array)
        $("#genres").text(data.genres.join(", "));

        // Critics Score
        $("#criticsScore").text(data.ratings.critics_score + "%");

        // Director (array of objects)
        $("#director").text(data.abridged_directors[0].name);

        // First 3 cast members
        let castList = "";
        for (let i = 0; i < 3; i++) {
            castList += data.abridged_cast[i].name + ", ";
        }
        $("#cast").text(castList.slice(0, -2)); // remove last comma

    });

});

