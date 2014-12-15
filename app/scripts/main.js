$(function() {
    $(".texts-wrapper").click(function() {
        location.href = $(this).find("a")[0].href;
    });
});

var ANIMATION_SIDE = 30;

// Toggle visibility of a card
function togglecard(cardId) {

    // Get the card
    var cardElem = $("#" + cardId);

    // Use the immediate child as a height reference
    var child = cardElem.children().first();
    var containerHeight = child.outerHeight();

    // Check if card is displayed
    cardElem.toggleClass("card-displayed");
    if (cardElem.hasClass("card-displayed")) {
        cardElem.css({height: containerHeight});
        child.css({left: 0, opacity: 1});

        // If open, close others
        $(".card-displayed").each(function() {
            var id = $(this).attr("id");
            if (id != cardId) {
                togglecard(id);
            }
        });

    } else {
        child.css({left: ANIMATION_SIDE, opacity: 0});
        cardElem.css({height: 0});
    }

}