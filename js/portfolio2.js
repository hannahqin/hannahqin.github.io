$(".subheader .design").on('click', function() {
    $(".subheader .art").removeClass("active");  
    $(this).addClass("active");

    var slideOptions = {
        direction: "down",
        ease: "swing"
    };

    $("#art").hide("slide", slideOptions, 500, function() {
        $("#graphic-design").show("slide", slideOptions, 500);
    });
});

$(".subheader .art").on('click', function() {
    $(".subheader .design").removeClass("active");  
    $(this).addClass("active");

    var slideOptions = {
        direction: "down",
        ease: "swing"
    };

    $("#graphic-design").hide("slide", slideOptions, 500, function() {
        $("#art").show("slide", slideOptions, 500);
    });
});

$(document).ready(function() {
    $("#art").hide();
    $('.swipebox').swipebox();
});