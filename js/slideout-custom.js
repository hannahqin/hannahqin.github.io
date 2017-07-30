$(document).ready(function() {
    // SLIDEOUT HIDDEN MENU
    var slideout = new Slideout({
        'panel': document.getElementById('page-content'),
        'menu': document.getElementById('hidden-menu'),
        'padding': 200,
        'tolerance': 70,
        'side': 'right'
    });

    // wait for page ready so that the hidden menu doesn't flash on the screen
    // before everything else has loaded
    $("#hidden-menu").css('visibility', 'visible');


    // BURGER MENU
    $('.burger').on('click', function() {
        slideout.toggle();
    });


    var fixed = document.querySelector('.fixed-elements');

    slideout.on('translate', function(translated) {
        fixed.style.transform = 'translateX(' + translated + 'px)';
    });

    slideout.on('beforeopen', function () {
        fixed.style.transition = 'transform 300ms ease';
        fixed.style.transform = 'translateX(-200px)';
    });

    slideout.on('beforeclose', function () {
        fixed.style.transition = 'transform 300ms ease';
        fixed.style.transform = 'translateX(0px)';
    });

    slideout.on('open', function () {
        fixed.style.transition = '';
    });

    slideout.on('close', function () {
        fixed.style.transition = '';
    });
});