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

let textArea = document.getElementById( "text-area" );
let newGameButton = document.getElementById( "newGame-button" );
let hitButton = document.getElementById( "hit-button" );
let stayButton = document.getElementById( "stay-button" );

let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];
InitGame();

function GetCardString( card ) {
  return card.value + " of " + card.suit;
}

function InitGame() {
  HideButtons();
  AddEvenHandlers();
}

function AddEvenHandlers() {
  newGameButton.addEventListener( "click", function () {
    textArea.innerText = "Started...";
    newGameButton.style.display = "none";
    hitButton.style.display = "inline";
    stayButton.style.display = "inline";
    gameStarted = true;
    gameOver = false;
    playerWon = false;
    deck = CreateDeck();
    ShuffleDeck( deck );
    dealerCards = [ getNextCard(), getNextCard() ];
    playerCards = [ getNextCard(), getNextCard() ];
    ShowStatus();
  });
}

function ShuffleDeck( deck ) {
  for ( let index = 0; i < array.length; ++index ) {
    let swapIdx = Math.trunc( Math.random() * deck.length ) ;
    let tmpCard = deck[ swapIdx ];
    deck[ swapIdx ] = deck[ index ];
    deck[ index ] = temCard;
  }
}

function SwapCards( card, card, number ) {

}
function HideButtons() {
  hitButton.style.display = "none";
  stayButton.style.display = "none";
}

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

function ShowStatus() {
  if ( !gameStarted ) {
    textArea.innerText = "Wellcome to Blackjack.";
    return;
  }
}
