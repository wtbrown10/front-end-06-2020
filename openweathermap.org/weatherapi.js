document.addEventListener("DOMContentLoaded", function () {
  //   const url = "https://api.github.com/users";

  //   http://api.openweathermap.org/data/2.5/weather?id=4930956&appid=9edeba1a521c36c2e47fabf5b8726988

  //   api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}

  // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}

  const local = document.getElementById('localWeather')

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      local.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    local.innerHTML = "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude;
  }

  getLocation();


  const url = "https://api.openweathermap.org/data/2.5/weather";

  document.getElementById("button").addEventListener("click", getWeather);

  function getWeather() {
    const zeq = "?zip=";

    const countryCode = ",us";

    const zipCode = document.getElementById("zipCode").value;

    if (zipCode.length === 5) {
      const id = "?id=";

      const city = "4930956";

      const appId = "&appid=";

      const apiKey = "9edeba1a521c36c2e47fabf5b8726988";

      const combinedUrl = url + zeq + zipCode + countryCode + appId + apiKey;

      console.log(zipCode);

      const xhr = new XMLHttpRequest();

      xhr.open("GET", combinedUrl, true);

      xhr.onload = function () {
        if (this.status === 200 && this.readyState === 4) {
          const parsedResponseText = JSON.parse(this.responseText);

          console.log(parsedResponseText);

          console.log(parsedResponseText.name);
          const cityName = parsedResponseText.name;
          const OK = parsedResponseText.main.temp;
          const fTemp = ((OK - 273.15) * 9 / 5 + 32).toFixed(2);

          console.log(fTemp);
          //   (0K − 273.15) × 9/5 + 32

          const tempOutPut = `The temperature in ${cityName} is ${fTemp} F`;

          document.getElementById("currentWeather").innerText = tempOutPut;
        } else if (this.status === 404) {
          console.log("404 Error");
        }
      };
      xhr.send();
    } else {
      alert("Please Enter 5 Digit Zip Code!!");
    }
  }
});
