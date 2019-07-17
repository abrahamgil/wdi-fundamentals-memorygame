var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);

if (cardsInPlay.length === 2) {
	console.log("There are 2 cards in play.");
} else {
	console.log("There are " + cardsInPlay.length + " in play.");
}

if (cardsInPlay[0] == cardsInPlay[1]) {
	alert("You found a match! " + cardsInPlay[0] + " " + cardsInPlay[1]);
} else {
	alert("You have not found a match! " + cardsInPlay[0] + " " + cardsInPlay[1]);
}