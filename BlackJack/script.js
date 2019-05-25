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

function CreateDeck() {
  let tempDeck = [];
  // all possible cards
  for (var suitIdx = 0; suitIdx < suits.length; ++suitIdx ) {
    for (var valuesIdx = 0; valuesIdx < values.length; ++valuesIdx ) {
      tempDeck.push( values[valuesIdx] + " of " + suits[suitIdx] );
    }
  }
  return tempDeck;
}
// deck of cards,
let deck = CreateDeck();

for (var i = 0; i < deck.length; i++) {
  console.log( deck[i] );
}

let playerCards = [
  deck[0],
  deck[2]
];


console.log( "Welcome to Blackjack!" );
console.log( "You are dealt:" );
console.log( " " + playerCards[0] );
console.log( " " + playerCards[1] );
