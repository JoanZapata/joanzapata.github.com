require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'bootstrap'], function (app, $) {
    'use strict';
    $('#slides').focus();

    var show = function(next){$(this).addClass('shown'); next();};
    var setCssTop = function(next){$(this).css('top',0); next();};
    $('#macbook').delay(200).queue(show);
    $('#navbar').css('top', -200).delay(600).queue(show).queue(setCssTop);
});