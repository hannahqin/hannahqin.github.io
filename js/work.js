$(".subheader a").click(function() {
    $(".active").removeClass("active");  
    $(this).addClass("active");
});

$(document).ready(function() {
    smoothScroll.init();
    $(document).on("scroll", onScroll);
});

function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('.subheader a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));

        if (refElement.position().top <= scrollPosition && 
            refElement.position().top + refElement.height() > scrollPosition) {
            $('.subheader a').removeClass("active");
            currentLink.addClass("active");
        }
        else {
            currentLink.removeClass("active");
        }
    });
}


