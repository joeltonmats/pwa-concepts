var app = (function () {
    'use strict';

    function logResult(result) {
        console.log(result);
    }

    function logError(error) {
        console.log('Looks like there was a problem: \n', error);
    }

    // Verify fetch support
    if (!('fetch' in window)) {
        console.log('Fetch API not found, try including the polyfill');
        return;
    }

    function fetchJSON() {
        fetch('examples/animals.json')
            .then(validateResponse)
            .then(readResponseAsJSON)
            .then(logResult)
            .catch(logError);
    }

    function validateResponse(response) {
        if (!response.ok)
            throw Error(response.statusText);
        return response;
    }

    function readResponseAsJSON(response) {
        return response.json();
    }

    function showImage(responseAsBlob) {
        var container = document.getElementById('container');
        var imgElem = document.createElement('img');
        container.appendChild(imgElem);
        var imgUrl = URL.createObjectURL(responseAsBlob);
        imgElem.src = imgUrl;
    }

    function readResponseAsBlob(response) {
        return response.blob();
    }

    function fetchImage() {
        fetch('examples/kitten.jpg')
            .then(validateResponse)
            .then(readResponseAsBlob)
            .then(showImage)
            .catch(logError);
    }

    function showText(responseAsText) {
        //  TODO 4a
    }

    function readResponseAsText(response) {
        // TODO 4b
    }

    function fetchText() {
        // TODO 4c
    }

    function headRequest() {
        // TODO 5.1
    }

    function logSize(response) {
        // TODO 5.2
    }

    /* NOTE: Never send unencrypted user credentials in production! */
    function postRequest() {
        // TODO 6.2
    }

    // Don't worry if you don't understand this, it's not part of the Fetch API.
    // We are using the JavaScript Module Pattern to enable unit testing of
    // our functions.
    return {
        readResponseAsJSON: (readResponseAsJSON),
        readResponseAsBlob: (readResponseAsBlob),
        readResponseAsText: (readResponseAsText),
        validateResponse: (validateResponse),
        fetchJSON: (fetchJSON),
        fetchImage: (fetchImage),
        fetchText: (fetchText),
        headRequest: (headRequest),
        postRequest: (postRequest)
    };

})();