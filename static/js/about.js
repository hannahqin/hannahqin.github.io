$(document).ready(function() {
    particlesJS("about", 
    {
        "particles": {
            "number": {
                 "value": 60,
               "density": {
                    "enable": true,
                    "value_area": 800
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
                }
            },

            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false
                }
            },

            "size": {
                "value": 0,
                "random": false,
                "anim": {
                    "enable": false
                }
            },

            "line_linked": {
                "enable": true,
                "distance": 200,
                "color": "#666",
                "opacity": 0.5,
                "width": 0.5
            },

            "move": {
                "enable": true,
                "speed": 2.5,
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
                    "enable": false
                },
                "onclick": {
                    "enable": false
                },
                "resize": true
            }
        },

        "retina_detect": true
    });
});