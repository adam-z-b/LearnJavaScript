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
  AddEventHandlers();
}

function AddEventHandlers() {
  newGameButton.addEventListener( "click", function () {
    textArea.innerText = "Started...";
    newGameButton.style.display = "none";
    hitButton.style.display = "inline";
    stayButton.style.display = "inline";
    gameStarted = true;
    gameOver = false;
    playerWon = false;
    deck = CreateDeck();
    // console.log( deck[0].value +" of " + deck[0].suit + "\n" );
    ShuffleDeck( deck );
    // console.log( deck[0].value +" of " + deck[0].suit + "\n" );
    dealerCards = [ GetNexCard(), GetNexCard() ];
    // console.log( dealerCards[0].value +" of " + dealerCards[0].suit + "\n" );
    playerCards = [ GetNexCard(), GetNexCard() ];
    // console.log( playerCards[0].value +" of " + playerCards[0].suit + "\n" );
    ShowStatus();
  });
}

function GetNexCard() {
  let card = deck.shift();
  return card;
}
function ShuffleDeck( deck ) {
  for ( let index = 0; index < deck.length; ++index ) {
    let swapIdx = Math.trunc( Math.random() * deck.length ) ;
    let tmpCard = deck[ swapIdx ];
    deck[ swapIdx ] = deck[ index ];
    deck[ index ] = tmpCard;
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
      // console.log( "Adding card " + card.value + " of " + card.suit );
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

  let dealerCardsString = GetCardsString( dealerCards );
  console.log( dealerCardsString );
  let playerCardsString = GetCardsString( playerCards );

  UpdateScores();

  textArea.innerText =
        "Dealer has:\n" +
        dealerCardsString +
        "\n\n" +
        "Player has:\n"  +
        playerCardsString +
        "\n\n"
        if ( gameOver ) {
          if ( playerWon ) {
            textArea.innerText = "You Win. WTG.\n";
          } else {
            textArea.innerText = "Dealer Won.\nBetter luck netx time...\n";
          }
          newGameButton.style.display = "inline";
          newGameButton.style.innerText = "Start another game.";
          hitButton.style.display = "none";
          stayButton.style.display = "none";
        }
}

function UpdateScores() {

}

function GetCardsString( cards ) {
  let cardsString = "";
  for (var i = 0; i < cards.length; i++) {
    cardsString += GetCardString( cards[i] ) + "\n";
  }
  return cardsString;
}

// function GetCardsString( card ) {
//   let cardsString = "";
//   for ( let i = 0; i < cards.length; ++i ) {
//     cardsString += cards[i] + "\n";
//   }
// }
