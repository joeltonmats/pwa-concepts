(function () {
    'use strict';

    // Add install and activate event listeners
    self.addEventListener('install', function (event) {
        console.log('Service worker installing...');
        /* good place for catching static assets */

        // Skip waiting
        self.skipWaiting();

        event.waitUntil(
            caches.open('static-v1').then(cache => cache.add('/img/it-coisa.jpg'))
        );
    });

    self.addEventListener('activate', function (event) {
        console.log('Service worker activating...');
        /* this event is often used to update caches. */
    });

    // Add fetch listener
    self.addEventListener('fetch', function (event) {
        var url = new URL(event.request.url);
        if (url.origin == location.origin && url.pathname == '/img/dog.jpeg') {
            event.respondWith(caches.match('/img/it-coisa.jpg'));
        }
        console.log('Fetching:', event.request.url);
    });

})();