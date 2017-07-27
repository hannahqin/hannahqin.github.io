$(".subheader .design").on('click', function() {
    if ($(this).hasClass('active')) {
        return;
    }

    $(".subheader .art").removeClass("active");  
    $(this).addClass("active");
    $("#art").fadeOut(400, function() {
        $("#graphic-design").fadeIn('slow');
    });
});

$(".subheader .art").on('click', function() {
    if ($(this).hasClass('active')) {
        return;
    }

    $(".subheader .design").removeClass("active");
    $(this).addClass("active");
    $("#graphic-design").fadeOut(400, function() {
        $("#art").fadeIn('slow');
    });
});

$(document).ready(function() {
    $("#art").hide();

    $(window).on('load',function(){
        $('#construction-modal').modal('show');
    });
});