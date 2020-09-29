// JavaScript source code

function getName() {

    var countryCode = $('#selCountry').val()
    var api_url = 'http://api.geonames.org/countryInfoJSON?formatted=true&lang=en'

    var request_url = api_url
    + '&country=' + countryCode 
        + '&username=flightltd&style=full'
    var request = new XMLHttpRequest();
    request.open('GET', request_url, true);

    request.onload = function () {

        if (request.status == 200) {
        // Success!
            var data = JSON.parse(request.responseText);
            document.getElementById('continent').innerHTML = data.geonames[0].continentName;
            document.getElementById('countryName').innerHTML = data.geonames[0].countryName;
            document.getElementById('capital').innerHTML = data.geonames[0].capital;
            document.getElementById('languages').innerHTML = data.geonames[0].languages;
            document.getElementById('population').innerHTML = data.geonames[0].population;

        } else if (request.status <= 500) {
        // We reached our target server, but it returned an error

        console.log("unable to geocode! Response code: " + request.status);
        var data = JSON.parse(request.responseText);
        } else {
        console.log("server error");
    }
};

request.onerror = function () {
    // There was a connection error of some sort
    console.log("unable to connect to server");
};

request.send();  // make the request
}
