(function () {
    'use strict';

    // Add install and activate event listeners
    self.addEventListener('install', function (event) {
        console.log('Service worker installing...');
        /* good place for catching static assets */
        // Skip waiting
        self.skipWaiting();
    });

    self.addEventListener('activate', function (event) {
        console.log('Service worker activating...');
        /* this event is often used to update caches. */
    });

    // I'm a new service worker

    // Add fetch listener
    self.addEventListener('fetch', function (event) {
        console.log('Fetching:', event.request.url);
    });

})();