$(function() {
    $(".texts-wrapper").click(function() {
        location.href = $(this).find("a")[0].href;
    });
});