$(".subheader .design").on('click', function() {
    $(".subheader .art").removeClass("active");  
    $(this).addClass("active");

    var slideOptions = {
        duration: 500,
        direction: "down",
        ease: "swing",
        queue: false
    };

    var fadeOptions = {
        duration: 900,
        queue: false
    };

    $("#art").hide("slide", slideOptions, function() {
        $("#graphic-design").show("slide", slideOptions)
                            .animate({ opacity: '1' }, fadeOptions);
    }).animate({ opacity: '0' }, fadeOptions);
});

$(".subheader .art").on('click', function() {
    $(".subheader .design").removeClass("active");  
    $(this).addClass("active");

    var slideOptions = {
        duration: 500,
        direction: "down",
        ease: "swing",
        queue: false
    };

    var fadeOptions = {
        duration: 900,
        queue: false
    };

    $("#graphic-design").hide("slide", slideOptions, function() {
        $("#art").show("slide", slideOptions)
                 .animate({ opacity: '1' }, fadeOptions);
    }).animate({ opacity: '0' }, fadeOptions);
});

$(document).ready(function() {
    $("#art").hide();
    $("#art").css('opacity', '0');
    $('.swipebox').swipebox();
});