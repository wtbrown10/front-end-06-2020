// https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=Avengers%20Endgame



document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('button').addEventListener('click', getMovie)

    function getMovie() {

        const link = "https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s="

        const movieName = document.getElementById('movieName').value

        const combinedUrl = link + movieName


        const data = null;

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                const responseJSON = JSON.parse(this.responseText);
                console.log(responseJSON);
            }
        });

        xhr.open("GET", combinedUrl, true);
        xhr.setRequestHeader("x-rapidapi-host", "movie-database-imdb-alternative.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "1833d3125cmsh0ab8c932d47a9a1p1baa09jsnd57107bb5df9");

        xhr.send(data);

    }
})
