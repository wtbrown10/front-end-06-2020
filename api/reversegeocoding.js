// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY


document.addEventListener('DOMContentLoaded', function () {

    const local = document.getElementById('location')

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            local.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        local.innerHTML = `Latitude: ${position.coords.latitude}<br>Longitude: ${position.coords.longitude}`;
        const latId = position.coords.latitude

        const lonId = position.coords.longitude

        const xhr = new XMLHttpRequest();


        const url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="

        const comma = ","

        const key = "&key="

        const apiKey = "AIzaSyC_Jr-RFMmJmO311Q4RpckLXkHJ6UQKIzU"

        const combinedUrl = url + latId + comma + lonId + key + apiKey

        xhr.open('GET', combinedUrl, true);

        xhr.onload = function () {

            if (this.readyState === 4 && this.status === 200) {
                const responseJSON = JSON.parse(this.responseText)
                console.log(responseJSON)
                console.log('fun')
                document.getElementById('address').innerHTML = `Your address is: ${responseJSON.results[1].formatted_address}`


            } else if (this.status === 404) {
                document.getElementById('address').innerText = '404 ERROR'
            }


        }

        xhr.send()
    }

    getLocation()
})