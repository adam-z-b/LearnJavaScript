/*
Blackjack
By Mark Zamoyta
taken from pluralsight js course.
*/

let suits = [ "Hearts", "Clubs", "Diamonds", "Speades" ];
let values = [ "Ace", "King", "Queen", "Jack", "Ten",
              "Nine", "Eight", "Seven", "Six", "Five",
              "Four", "Three", "Two"
            ];
let cardValues = {};
  cardValues[ "Ace" ] = 1;
  cardValues[ "King" ] = 10;
  cardValues[ "Queen" ] = 10;
  cardValues[ "Jack" ] = 10;
  cardValues[ "Ten" ] = 10;
  cardValues[ "Nine" ] = 9;
  cardValues[ "Eight" ] = 8;
  cardValues[ "Seven" ] = 7;
  cardValues[ "Six" ] = 6;
  cardValues[ "Five" ] = 5;
  cardValues[ "Four" ] = 4;
  cardValues[ "Three" ] = 3;
  cardValues[ "Two" ] = 2;

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
    UpdateScores();
    ShowStatus();
  });

  hitButton.addEventListener( "click", function() {
    playerCards.push( GetNexCard() );
    UpdateScores();
    if ( playerScore > 21 ) {
      gameOver = true;
      playerWon = false;
    }
    ShowStatus();
  });
}

function CheckForEndOfGame() {

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
  let playerCardsString = GetCardsString( playerCards );

  // UpdateScores();

  textArea.innerText =
        "Dealer has:\n" +
        dealerCardsString +
        "Score: " + dealerScore +
        "\n\n" +
        "Player has:\n"  +
        playerCardsString +
        "Score: " + playerScore +
        "\n\n"
        if ( gameOver ) {
          if ( playerWon ) {
            textArea.innerText += "You Win. WTG.\n";
          } else {
            textArea.innerText += "Dealer Won.\nBetter luck netx time...\n";
          }
          newGameButton.style.display = "inline";
          newGameButton.style.innerText = "Start another game.";
          hitButton.style.display = "none";
          stayButton.style.display = "none";
        }
}

function UpdateScores() {
  dealerScore = GetScore( dealerCards );
  playerScore = GetScore( playerCards );
}

function GetScore( cards ) {
  let score = 0;
  let hasAce = false;
  for ( let i = 0; i < cards.length; ++i ) {
    let card = cards[i];
    score += cardValues[ card.value ];
    if ( card.value === "Ace" ) {
      hasAce = true;
    }
  }

  if ( hasAce && score + 10 <= 21 ) {
    score += 10;
  }
  return score;
}

function GetNumericValue( card ) {

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
