"use strict";

$('.single-blog-post .blog-content').dotdotdot({
    /* Function invoked after truncating the text.
       Inside this function, "this" refers to the wrapper. */
    callback: function( isTruncated ) {
        // if(!isTruncated)
        //     return;
        // var summary = $(this).find('.summary');
        // summary.html(summary.html().replace(/<br>/, 'ok'))
    },
    ellipsis: "\u2026",
    /* The text to add as ellipsis. */

    height: 300,
    /* The (max-)height for the wrapper:
       null: measure the CSS (max-)height ones;
       a number: sets a specific height in pixels;
       "watch": re-measures the CSS (max-)height in the "watch". */

    keep: '.btn.btn-brand',
    /* jQuery-selector for elements to keep after the ellipsis. */

    tolerance: 0,
    /* Deviation for the measured wrapper height. */

    truncate: "word",
    /* How to truncate the text: By "node", "word" or "letter". */

    watch: "window",
    /* Whether to update the ellipsis:
       true: Monitors the wrapper width and height;
       "window": Monitors the window width and height. */

});
var executives = $('.executives-list');
if (executives.length) {
    executives.owlCarousel({
        autoplay: true,
        loop: true,
        autoplayTimeout: 2000,
        items: 4,
        dots: true,
        margin: 20,
        stagePadding: 0,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            580: {
                items: 2
            },
            700: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 3
            },
            1480: {
                items: 3
            }
        }
    });
}

$(".honorable-committee-list > .customNavigation > .next").click(function () {
    executives.trigger('next.owl.carousel');
});
$(".honorable-committee-list > .customNavigation > .prev").click(function () {
    executives.trigger('prev.owl.carousel');
});

