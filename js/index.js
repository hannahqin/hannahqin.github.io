// index.js
"use strict";

// var update_fontsize = function() {
//     var sizeWidth = $("#text-col").width()/19+0.9;
//     var sizeHeight = $("#text-col").height()/25+1.2;
//     var min = Math.min(sizeWidth, sizeHeight);

//     var fontSize = parseInt(min)+"px";
//     $(".about-p").css('font-size', fontSize);
// };

$(document).ready(function() {
    // update_fontsize();
  
    // fade in effect
    $("#learnmore").delay(250).fadeIn(2150);
  
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault(); // Prevent default anchor click behavior

            var hash = this.hash;
            $('html, body').animate(
                { scrollTop: $(hash).offset().top }, 
                500,    // number of milliseconds scrolling will take
                function() { window.location.hash = hash; }
            ); // End animate()
        } // End if
    });
});

$(window).resize(function() {
    update_fontsize();
});

// $(window).scroll(function() {
//     $("#navbar").addClass(".no-display").fadeOut(300);

//     clearTimeout($.data(this, 'scrollTimer'));
//     $.data(this, 'scrollTimer', setTimeout(function() {
//         $("#navbar").removeClass(".no-display").fadeIn(300);
//     }, 350));
// });
