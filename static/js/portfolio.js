function watchForHover() {
    var hasHoverClass = false;
    var container = document.body;
    var lastTouchTime = 0;

    function enableHover() {
        // filter emulated events coming from touch events
        if (new Date() - lastTouchTime < 500) return;
        if (hasHoverClass) return;

        container.className += ' has-hover';
        hasHoverClass = true;
    }

    function disableHover() {
        if (!hasHoverClass) return;

        container.className = container.className.replace(' hasHover', '');
        hasHoverClass = false;
    }

    function updateLastTouchTime() {
        lastTouchTime = new Date();
    }

    document.addEventListener('touchstart', updateLastTouchTime, true);
    document.addEventListener('touchstart', disableHover, true);
    document.addEventListener('mousemove', enableHover, true);

    enableHover();
}

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
    watchForHover();


    // GOOGLE ANALYTICS
    $("a.design").on('click', function() {
        ga('send', {
            hitType: 'event',
            eventCategory: 'portfolio',
            eventAction: 'DesignSectionLink'
        });
    });

    $("a.art").on('click', function() {
        ga('send', {
            hitType: 'event',
            eventCategory: 'portfolio',
            eventAction: 'ArtSectionLink'
        });
    });
});