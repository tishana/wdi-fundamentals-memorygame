var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You've found a match!");
	} else {
		console.log("Sorry, loser... Try again...");
	}
}

var flipCard = function( cardId ){
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push[cardId];
var cardTwo = cards[2];
  if (cardsInPlay.length === 2){
	checkForMatch();
  }
}

flipCard(0);
flipCard(2);

