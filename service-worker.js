(function () {
    'use strict';

    // Add install and activate event listeners
    self.addEventListener('install', function (event) {
        console.log('Service worker installing...');
        /* good place for catching static assets */
        // TODO 3.4: Skip waiting
    });

    self.addEventListener('activate', function (event) {
        console.log('Service worker activating...');
        /* this event is often used to update caches. */
    });

    // TODO - 3.3: Add a comment to change the service worker

    // TODO - 4: Add fetch listener

})();