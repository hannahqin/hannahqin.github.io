// JavaScript Document
$(document).ready(function() {
    "use strict";
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
 
    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });
});

var divs = $('.arrow');
    
$(window).on('scroll', function() {
  "use strict";
   var st = $(this).scrollTop();

   /* avoid unnecessary call to jQuery function */
   if (st > 0) {
      divs.css('opacity', 0);
   }
});