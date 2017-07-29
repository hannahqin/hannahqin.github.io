$(".subheader .design").on('click', function() {
    $(".subheader .art").removeClass("active");  
    $(this).addClass("active");

    var slideOptions = {
        duration: 500,
        direction: "down",
        ease: "swing"
    };

    $("#art").hide("slide", slideOptions, function() {
        $("#graphic-design").show("slide", slideOptions);
    });
});

$(".subheader .art").on('click', function() {
    $(".subheader .design").removeClass("active");  
    $(this).addClass("active");

    var slideOptions = {
        duration: 500,
        direction: "down",
        ease: "swing"
    };

    $("#graphic-design").hide("slide", slideOptions, function() {
        $("#art").show("slide", slideOptions);
    });
});

$(document).ready(function() {
    $("#art").hide();
    $(window).on('load',function(){
        $('#construction-modal').modal('show');
    });
    //$('.swipebox').swipebox();
});