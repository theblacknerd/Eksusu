"use strict";

//jQuery dom ready
jQuery(document).ready(function ($) {

    if ($('#off-canvas').length > 0) {
        $(".navbar-nav").clone().prependTo("#off-canvas .offcanvaswrap_menus");
        $(function () {
            $(document).trigger("enhance");
        });

        $(document.body).addClass('offcanvas-added');
    }


    //Home Slider  JS
    $(".slider-active-wrap").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 3000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });
    //end Home Slider  JS


    // Funfact Counter JS
    $('.funfact-count').counterUp({
        delay: 50,
        time: 1000
    }); //end funfact js

    //smooth scrolling
    $('.smooth-scroll').smoothScroll({
        speed: 1000,
        easing: 'jswing'
    }); //end smooth scrolling

    //Header Fix JS
    var header = document.getElementById("fixheader"),
        sticky = 40;

    function headerfix() {
        if (window.pageYOffset >= sticky) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    } //end header fix js

    var top = $('.scroll-top');

    // Scroll to Top Click
    top.on('click', function () {
        $('html').animate({
            scrollTop: 0
        }, 2000);

        return false;
    }); //end scroll top click

    //All Window Srcoll Function

    $(window).scroll(function () {
        //Header Fix JS
        headerfix();

        //Scroll top Hide Show
        if ($(window).scrollTop() >= 500) {
            top.fadeIn();
        } else {
            top.fadeOut();
        }

    }); // end all Window Srcoll Function


});//jQuery end