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
	//var cardID = this.getAttribute('data-id');
	console.log(cardId);
	//var card = cards[cardId].rank;
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardID].cardImage);
	if (cardsInPlay.length===2) {
		checkForMatch();
	};
	// console.log("User flipped " + card);
	// console.log(cards[cardId].cardImage);
	// console.log(cards[cardId].suit);
	// checkForMatch(card);

};

function createBoard(){
	for (var i=0; i< cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		cardTable.appendChild(cardElement);

	}

};