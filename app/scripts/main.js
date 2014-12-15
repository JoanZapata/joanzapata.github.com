$(function() {
    $(".texts-wrapper").click(function() {
        location.href = $(this).find("a")[0].href;
    });
});


// Toggle visibility of a card
function togglecard(cardId) {

    // Get the card
    var cardElem = $("#" + cardId);

    // Use the immediate child as a height reference
    var containerHeight = cardElem.children().first().outerHeight();

    // Check if card is displayed
    cardElem.toggleClass("displayed");
    if (cardElem.hasClass("displayed")) {
        console.log("animate to height " + containerHeight);
        cardElem.animate({height: containerHeight, opacity: 1}, 400);
    } else {
        cardElem.animate({opacity: 0, height: 0}, 400);
    }
}