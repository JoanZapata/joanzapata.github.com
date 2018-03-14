---
---

const ANIMATION_DURATION = 250;
const ANIMATION_SIDE = 30;
const ANIMATION_CARD_TOP = -32;

const openScreenshot = screenshot => {
  window.open('images/screenshots/' + screenshot);
};

// Toggle visibility of a card
const togglecard = cardId => {
  console.log("Alo?");

  // Get the card
  var cardElem = $("#card-" + cardId);
  var titleElem = $("#title-" + cardId);

  // Determine if animation should go left/right
  var isElementRight = titleElem.css("text-align") === "left";

  // Use the immediate child as a height reference
  var child = cardElem.children().first();
  var more = $("#more-" + cardId);
  var containerHeight = child.outerHeight();
  var titleContentHeight = titleElem.children().first().outerHeight();

  // Check if card is displayed
  cardElem.toggleClass("card-displayed");
  if (cardElem.hasClass("card-displayed")) {

      /// ANIMATE IN
      // Hide title
      titleElem.css({right: 0, opacity: 1, height: titleContentHeight});
      titleElem.transition({right: 16, opacity: 0, height: 0}, ANIMATION_DURATION);

      // Animate to nominal height, and restore auto height after animation
      // to deal with browser size changes.
      cardElem.css({top: ANIMATION_CARD_TOP});
      cardElem.transition({height: containerHeight, top: 0}, {
          duration: ANIMATION_DURATION,
          complete: function () {
              cardElem.css({height: "auto"});
          }
      });

      // Set child original position before animation
      var childOffset = isElementRight
          ? { left: ANIMATION_SIDE, opacity: 0 }
          : { right: ANIMATION_SIDE, opacity: 0 };
      child.css(childOffset);

      // Then animate to nominal position and opacity
      var visibleProperties = isElementRight
          ? {left: 0, opacity: 1}
          : {right: 0, opacity: 1};
      child.transition(visibleProperties, ANIMATION_DURATION);

      // If a "more" is found, animate it to visible
      if (more) more.transition({opacity: 0}, ANIMATION_DURATION);

      // Then close others displayed cards
      $(".card-displayed").each(function () {
          var id = $(this).attr("id");
          if (id != "card-" + cardId) {
              $scope.togglecard(id.substring(5));
          }
      });

  } else {

      titleElem.transition({right: 0, opacity: 1, height: titleContentHeight}, ANIMATION_DURATION);

      /// ANIMATE OUT
      var hiddenProperties = isElementRight
          ? {left: ANIMATION_SIDE, opacity: 0}
          : {right: ANIMATION_SIDE, opacity: 0};
      child.transition(hiddenProperties, ANIMATION_DURATION);
      cardElem.css({height: cardElem.outerHeight()});
      cardElem.transition({height: 0, top: ANIMATION_CARD_TOP}, ANIMATION_DURATION);
      if (more) more.transition({opacity: 1}, ANIMATION_DURATION);
  }
}

const showMoreBooks = () => {
  $('#moreBooks').toggleClass('d-none')
  $('#showMoreBooks').toggleClass('d-none')
}
