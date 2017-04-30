(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal({ reset: false, mobile: true });

    sr.reveal('.top-content', {
        duration: 700,
        distance: '0px'
    }, 200);

    sr.reveal('.sr-icons', {
        duration: 600,
        scale: .3,
        distance: '0px'
    }, 200);

    sr.reveal('.laptop-pic', {
        duration: 600,
        distance: '0px'
    }, 200);

    sr.reveal('.sr-featured', {
        duration: 600,
        scale: .3,
        distance: '0px'
    }, 200);

    sr.reveal('.sr-social', {
        duration: 2000,
        distance: '0px'
    }, 200);

})(jQuery); // End of use strict
