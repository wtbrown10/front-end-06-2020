document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('button').addEventListener('click', loadText);

    function loadText() {
        // alert('I am the genie in the lamp, why did you click me?');

        //1. Step Number 1 in the XHR API process
        // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
        const xhr = new XMLHttpRequest()

        console.log('1. xhr = new')
        console.log(xhr.readyState); // should == 4
        console.log(xhr.status) // should == 200 - 299
        console.log('------------')

        // 2. Step Number 2
        // Initializes a request or re-initializes an existing one.
        // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
        // XMLHttpRequest.open(method, url[, async[, user[, password]]])
        // method: the HTTP request method to use, such as "GET", "POST", "PUT", etc. ignored for non-HTTP(s) URLs.

        xhr.open('GET', 'https://api.github.com/users', true) // if steps 3 and 4 are succesful the url data will be stored in xhr.responseText

        // troubleshooting
        console.log('2. xhr.open')
        console.log(xhr.readyState); // should == 4
        console.log(xhr.status) // should == 200 - 299
        console.log('------------')


        // 3. step Number 3
        // The XMLHttpRequestEventTarget.onload is the function called when an XMLHttpRequest transaction completes successfully.

        xhr.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                const responseJSON = JSON.parse(this.responseText)
                console.log(responseJSON)
                // document.getElementById("dataOutput").innerText = responseJSON[0].login;
                // let html += `<li>${responseJSON[0].login}</li>`
                let html = "<ul>"
                for (let i = 0; i < responseJSON.length; i++) {
                    html = html + `<li>${responseJSON[i].login}</li>`
                }
                html = html + "</ul>"
                document.getElementById('dataOutput').innerHTML = html


                // troubleshooting
                console.log('3. xhr.onload')
                console.log(xhr.readyState); // should == 4
                console.log(xhr.status) // should == 200 - 299
            } else if (this.status === 404) {
                document.getElementById('dataOutput').innerText = "404 Error: File Not Found"
            }
            console.log('------------')
        }

        // 4. step Number 4

        xhr.send();

        // troubleshooting
        console.log('4. xhr.send')
        console.log(xhr.readyState); // should == 4
        console.log(xhr.status) // should == 200 - 299
        console.log('------------')
    }
});