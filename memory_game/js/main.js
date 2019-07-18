var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

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
	var card = cards[cardId].rank;
	cardsInPlay.push(cards[cardId]);
	console.log("User flipped " + card);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch(card);

};