document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("button").addEventListener("click", loadText);

  function loadText() {
    // step 1
    const xhr = new XMLHttpRequest();
    console.log(xhr.readyState); // should == 4
    console.log(xhr.status); // should == 200 - 299
    console.log("------------");

    // step 2
    xhr.open("GET", "https://api.github.com/users", true);
    console.log(xhr.readyState); // should == 4
    console.log(xhr.status); // should == 200 - 299
    console.log("------------");

    // step 3
    xhr.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        const responseJSON = JSON.parse(this.responseText);
        console.log(responseJSON);

        let html = "<ul>";
        for (let i = 0; i < responseJSON.length; i++) {
          html += `<li>${responseJSON[i].login}</li>`;
        }
        html += "</ul>";
        document.getElementById("list").innerHTML = html;

        console.log(xhr.readyState); // should == 4
        console.log(xhr.status); // should == 200 - 299
      } else if (this.status === 404) {
        document.getElementById("list").innerText =
          "ERROR 404: File Not Found!";
      }
    };

    console.log("------------");

    // step 4
    xhr.send();
    console.log(xhr.readyState); // should == 4
    console.log(xhr.status); // should == 200 - 299
    console.log("------------");
  }
});
