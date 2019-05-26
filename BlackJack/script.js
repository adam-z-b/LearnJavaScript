/*
Blackjack
By Mark Zamoyta
taken from pluralsight js course.
*/

let suits = [ "Hearts", "Clubs", "Diamonds", "Speades" ];
let values = [ "Ace", "King", "Queen", "Jack", "Ten",
              "Nine", "Eight", "Seven", "Six", "Five",
              "Four", "Three", "Two", "One"
            ];

let teatArea = document.getElementById( "text-area" );
let newGameButton = document.getElementById( "newGame-button" );
let hitButton = document.getElementById( "hit-button" );
let stayButton = document.getElementById( "stay-button" );

function CreateDeck() {
  let tempDeck = [];
  // all possible cards
  for (var suitIdx = 0; suitIdx < suits.length; ++suitIdx ) {
    for (var valuesIdx = 0; valuesIdx < values.length; ++valuesIdx ) {
      let card = {
        suit: suits[suitIdx],
        value: values[valuesIdx]
      };
      tempDeck.push( card );
    }
  }
  return tempDeck;
}
// deck of cards,
let deck = CreateDeck();

function GetNextCard() {
  return deck.shift();
}

let playerCards = [
  GetNextCard(),
  GetNextCard()
];

function GetCardString( card ) {
  return card.value + " of " + card.suit;
}

console.log( "Welcome to Blackjack!" );
console.log( "You are dealt:" );
console.log( " " + GetCardString( playerCards[0] ) );
console.log( " " + GetCardString( playerCards[1] ) )
