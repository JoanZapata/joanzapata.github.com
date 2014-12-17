$(function() {
    $(".texts-wrapper").click(function() {
        location.href = $(this).find("a")[0].href;
    });

    $('.subtitle').slick({
        vertical: true,
        autoplay: true,
        autoplaySpeed: 1100,
        pauseOnHover: false,
        swipe: false,
        touchMove: false
    });
});


var ANIMATION_DURATION = 250;
var ANIMATION_SIDE = 30;

// Toggle visibility of a card
function togglecard(cardId) {

    // Get the card
    var cardElem = $("#card-" + cardId);

    // Use the immediate child as a height reference
    var child = cardElem.children().first();
    var more = $("#more-" + cardId);
    var containerHeight = child.outerHeight();

    // Check if card is displayed
    cardElem.toggleClass("card-displayed");
    if (cardElem.hasClass("card-displayed")) {
        cardElem.transition({height: containerHeight}, ANIMATION_DURATION);
        child.css({left: ANIMATION_SIDE});
        child.transition({left: 0, opacity: 1}, ANIMATION_DURATION);
        if (more) more.transition({opacity: 0}, ANIMATION_DURATION);

        // If open, close others
        $(".card-displayed").each(function() {
            var id = $(this).attr("id");
            if (id != "card-" + cardId) {
                togglecard(id.substring(5));
            }
        });

    } else {
        child.transition({left: ANIMATION_SIDE, opacity: 0}, ANIMATION_DURATION);
        cardElem.transition({height: 0}, ANIMATION_DURATION);
        if (more) more.transition({opacity: 1}, ANIMATION_DURATION);
    }

}

