/**
 * This demo was prepared for you by Petr Tichy - Ihatetomatoes.net
 * Want to see more similar demos and tutorials?
 * Help by spreading the word about Ihatetomatoes blog.
 * Facebook - https://www.facebook.com/ihatetomatoesblog
 * Twitter - https://twitter.com/ihatetomatoes
 * Google+ - https://plus.google.com/u/0/109859280204979591787/about
 * Article URL: http://ihatetomatoes.net/simple-parallax-scrolling-tutorial/
 */

// Init Skrollr
var s = skrollr.init({
    edgeStrategy: 'set',
    forceHeight: false,
    smoothScrolling: false,
    easing: {WTF: Math.random, inverted: function (p) {
            return 1 - p;
        }}
});

skrollr.menu.init(s, {
    //skrollr will smoothly animate to the new position using `animateTo`.
    animate: true,
    //The easing function to use.
    //easing: 'sqrt',

    //Multiply your data-[offset] values so they match those set in skrollr.init
    scale: 2,
    //How long the animation should take in ms.
    duration: function (currentTop, targetTop) {
        //By default, the duration is hardcoded at 500ms.
        return 800;

        //But you could calculate a value based on the current scroll position (`currentTop`) and the target scroll position (`targetTop`).
        return Math.abs(currentTop - targetTop) * 40;
    }
    //If you pass a handleLink function you'll disable `data-menu-top` and `data-menu-offset`.
    //You are in control where skrollr will scroll to. You get the clicked link as a parameter and are expected to return a number.
    /*handleLink: function(link) {
     return 400;//Hardcoding 400 doesn't make much sense.
     }*/
});



// Refresh Skrollr after resizing our sections
s.refresh($('.homeSlide'));

(function ($) {

    // Setup variables
    $window = $(window);
    $slide = $('.homeSlide');
    $body = $('body');

    //FadeIn all sections   
    $body.imagesLoaded(function () {
        setTimeout(function () {

            // Resize sections
            adjustWindow();

            // Fade in sections
            $body.removeClass('loading').addClass('loaded');

        }, 800);
    });

    function adjustWindow() {

        // Init Skrollr


        // Get window size
        winH = $window.height();

        // Keep minimum height 550
        if (winH <= 550) {
            winH = 550;
        }

        // Resize our slides
        $slide.height(winH);

        // Refresh Skrollr after resizing our sections


    }

})(jQuery);