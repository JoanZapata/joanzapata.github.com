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
    cardElem.toggleClass("card-displayed");
    if (cardElem.hasClass("card-displayed")) {
        cardElem.animate({height: containerHeight, opacity: 1}, 400);
        
        // If open, close others
        $(".card-displayed").each(function() {
            var id = $(this).attr("id");
            if (id != cardId) {
                togglecard(id);
            }
        });

    } else {
        cardElem.animate({opacity: 0, height: 0}, 400);
    }

}