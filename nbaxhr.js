document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("button").addEventListener("click", loadText);

  function loadText() {
    var data = null;

    const xhr = new XMLHttpRequest();

    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        const responseJSON = JSON.parse(this.responseText);

        console.log(responseJSON);

        let html = "<ul>";
        for (let i = 0; i < responseJSON.data.length; i++) {
          html =
            html +
            `<li>${responseJSON.data[i].player.first_name}, ${responseJSON.data[i].player.last_name}</li></p><p>Season: ${responseJSON.data[i].game.season}<p>Team: ${responseJSON.data[i].team.full_name}</p><p> Postion: ${responseJSON.data[i].player.position}</p><p> Height: ${responseJSON.data[i].player.height_feet}' ${responseJSON.data[i].player.height_inches}</p><p> Weight: ${responseJSON.data[i].player.weight_pounds}lbs </p>`;
        }

        html = html + "</ul>";
        document.getElementById("list").innerHTML = html;
      } else if (this.status === 404) {
        document.getElementById("list").innerText =
          "ERROR 404: Data Not Found!";
      }
    });

    xhr.open("GET", "https://free-nba.p.rapidapi.com/stats?page=0&per_page=25");
    xhr.setRequestHeader("x-rapidapi-host", "free-nba.p.rapidapi.com");
    xhr.setRequestHeader(
      "x-rapidapi-key",
      "1833d3125cmsh0ab8c932d47a9a1p1baa09jsnd57107bb5df9"
    );


    xhr.send(data);
  }
});
