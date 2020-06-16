// https://billboard-api2.p.rapidapi.com/hot-100?date=2019-05-11&range=1-10

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("button").addEventListener("click", loadText);

    function loadText() {
        const data = null;

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        // console.log('heyhey')

        const url = 'https://billboard-api2.p.rapidapi.com/hot-100?date='

        const date = document.getElementById('date').value

        const range = '&range=1-10'

        const combindedUrl = url + date + range

        xhr.addEventListener("readystatechange", function () {


            if (this.readyState === this.DONE) {
                const parsedResponseText = JSON.parse(this.responseText);
                const stringy = JSON.stringify(parsedResponseText.content)


                console.log(parsedResponseText);

                let html = "<ul>";
                for (let i = 0; i < 10; i++) {
                    html =
                        html +
                        `<li>Artist: ${parsedResponseText.content.rank}</li>` //['artist']} </li><p>Last Week:${parsedResponseText.content[i]['last week']}</p><p>Peak Postion: ${parsedResponseText.content[i]['peak position']}<p>Rank: ${parsedResponseText.content[i].rank}</p><p> Title: ${parsedResponseText.content[i].title}</p><p> Weeks at no.1: ${parsedResponseText.content[i]['weeks at no.1']}'</p><p>Weeks on chart ${parsedResponseText.data[i]['weeks on chart']}</p>;

                    console.log(parsedResponseText.content[i])
                }

                html = html + "</ul>";
                document.getElementById("list").innerHTML = html;
            }

        })

        xhr.open("GET", combindedUrl);
        xhr.setRequestHeader("x-rapidapi-host", "billboard-api2.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "1833d3125cmsh0ab8c932d47a9a1p1baa09jsnd57107bb5df9");



        xhr.send(data);

    }
})