var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] == cardsInPlay[1]) {
	alert("You found a match! " + cardsInPlay[0] + " " + cardsInPlay[1]);
	} else {
		alert("You have not found a match! " + cardsInPlay[0] + " " + cardsInPlay[1]);
	}

};


if (cardsInPlay.length === 2) {
	console.log("There are 2 cards in play.");
} else {
	console.log("There are " + cardsInPlay.length + " in play.");
}


function flipCard(cardId) {
	var card = cards[cardId];
	cardsInPlay.push(card);
	console.log("User flipped " + card);
	checkForMatch(card);

};