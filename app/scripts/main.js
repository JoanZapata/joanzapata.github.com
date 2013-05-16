require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        carousel: '../components/carousel/jquery.waterwheelCarousel.min',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        carousel: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['jquery', 'bootstrap', 'carousel'], function ($) {
    'use strict';
    $('#slides').focus();

    var show = function (next) {
        $(this).addClass('shown');
        next();
    };
    var setCssTop = function (next) {
        $(this).css('top', 0);
        next();
    };
    $('#macbook').delay(200).queue(show);
    $('#navbar').css('top', -200).delay(600).queue(show).queue(setCssTop);


    var isClick = false;
    var movingTo = function(item) {
        var id = item.attr("jz-desc");
        console.log(id);
        descs.each(function (elem) {
            if ($(this).attr('id') == id)
                $(this).addClass("active");
            else  $(this).removeClass("active");
        });
    }

    var descs = $(".description");
    var carousel = $("#carousel").waterwheelCarousel({
        autoPlay: 10000,
        animationEasing: 'swing',
        speed: 600,
        keyboardNav: true,
        forcedImageWidth: 640,
        forcedImageHeight: 440,
        movingToCenter: movingTo,
        movedToCenter: movingTo,
        activeClassName: 'active',
        linkHandling: 2
    });

    movingTo($("#carousel img:nth-child(1)"));

    $("#chevron-left").click(function(){
        isClick = true;
        carousel.prev();
    });

    $("#chevron-right").click(function(){
        isClick = true;
        carousel.next();
    });
});