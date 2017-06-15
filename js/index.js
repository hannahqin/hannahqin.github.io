$(document).ready(function() {
    /* ---- particles.js config ---- */
   particlesJS("home", 
   {
     "particles": {
           "number": {
               "value": 50,
               "density": {
                   "enable": false,
                   "value_area": 300
               }
           },

           "color": {
             "value": "#727272"
           },

           "shape": {
               "type": "circle",
               "stroke": {
                   "width": 0,
                   "color": "#000000"
               },
               "polygon": {
                   "nb_sides": 3
               },
               "image": {
                   "src": "img/github.svg",
                   "width": 100,
                   "height": 100
               }
           },

           "opacity": {
               "value": 0.65,
               "random": false,
               "anim": {
                   "enable": false,
                   "speed": .5,
                   "opacity_min": 0.1,
                   "sync": false
               }
           },

           "size": {
               "value": 0,
               "random": true,
               "anim": {
                   "enable": false,
                   "speed": 40,
                   "size_min": 0.1,
                   "sync": false
               }
           },

           "line_linked": {
               "enable": true,
               "distance": 200,
               // "color": "#4975e2",
               "color": "#666",
               "opacity": 0.6,
               "width": 0.5
           },

           "move": {
               "enable": true,
               "speed": 3.2,
               "direction": "none",
               "random": false,
               "straight": false,
               "out_mode": "out",
               "bounce": false,
               "attract": {
                   "enable": false,
                   "rotateX": 641,
                   "rotateY": 1200
               }
           }
       },

       "interactivity": {
           "detect_on": "canvas",

           "events": {
               "onhover": {
                   "enable": true,
                   "mode": "repulse"
               },
               "onclick": {
                   "enable": false
               },
               "resize": true
           },

           "modes": {
               "repulse": {
                   "distance": 57,
                   "duration": 0.4
               },
               "push": {
                   "particles_nb": 4
               },
           }
       },

       "retina_detect": true
   });

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault(); // Prevent default anchor click behavior

            var hash = this.hash;
            $('html, body').animate(
                { scrollTop: $(hash).offset().top }, 
                500, // number of milliseconds scrolling will take
                function() {
                    window.location.hash = hash;
                }
            ); // End animate()
        } // End if
    });
});