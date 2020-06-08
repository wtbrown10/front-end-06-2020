document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("button").addEventListener("click", loadText);

  function loadText() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.github.com/users", true);

    xhr.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        const responseJSON = JSON.parse(this.responseText);
        console.log(responseJSON);

        html = "<ul>";
        for (let i = 0; i < responseJSON.length; i++) {
          html += `<li>${responseJSON[i].login}</li>`;
        }

        html += "</ul>";
        document.getElementById("list").innerHTML = html;
      } else if (this.status === 404) {
        document.getElementById("list").innerText =
          "ERROR 404: Data Not Found!";
      }
    };

    xhr.send();
  }
});
