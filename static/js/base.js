$(document).ready(function() {
    // smoothScroll.init();

    $("#linkedin").on('click', function() {
        ga('send', {
            hitType: 'event',
            // eventCategory: 'home',
            eventAction: 'LinkedIn'
        });
    });

    $("#instagram").on('click', function() {
        ga('send', {
            hitType: 'event',
            // eventCategory: 'home',
            eventAction: 'Instagram'
        });
    });
});