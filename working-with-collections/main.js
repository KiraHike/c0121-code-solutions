console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  { name: 'Kirk', hand: [] },
  { name: 'Picard', hand: [] },
  { name: 'Janeway', hand: [] },
  { name: 'Archer', hand: [] }
];

var deck = [];
var shuffledDeck = [];
var allScores = [];
var allPlayers = [];
var winners = [];
var handCards = 0;

function makeDeck() {
  deck = [];
  var suit = ['Spades', 'Diamonds', 'Clubs', 'Hearts'];
  var rank = ['Ace', 'King', 'Queen', 'Jack', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
  for (var i = 0; i < suit.length; i++) {
    for (var x = 0; x < rank.length; x++) {
      var card = { suit: suit[i], rank: rank[x] };
      deck.push(card);

    }
  }
  return deck;
}

makeDeck();

function shuffle(array) {
  var indexList = [];
  var newIndex;
  for (var i = 0; indexList.length < 52; i++) {
    newIndex = Math.floor(Math.random() * Math.floor(53));
    if (indexList.includes(newIndex) === false) {
      indexList.push(newIndex);
    }
  }
  for (i = 0; i < array.length; i++) {
    shuffledDeck.splice(indexList[i], 0, array[i]);
  }
  return shuffledDeck;
}

function deal(players, cards, deck) {
  allScores = [];
  allPlayers = [];
  winners = [];
  for (var i = 0; i < players.length; i++) {
    var score = 0;
    var dealHand = deck.splice(0, cards);
    players[i].hand = dealHand;
    for (var x = 0; x < cards; x++) {
      if (dealHand[x].rank === 'Ace') {
        score += 11;
      } else if (dealHand[x].rank === 'King' || dealHand[x].rank === 'Queen' || dealHand[x].rank === 'Jack') {
        score += 10;
      } else {
        score += Number(dealHand[x].rank);
      }
    }
    players[i].score = score;
    allPlayers.push(players[i]);
    allScores.push(score);
  }
  var highestScore = Math.max(...allScores);
  for (i = 0; i < allPlayers.length; i++) {
    if (allPlayers[i].score === highestScore) {
      winners.push(allPlayers[i]);
    }
  }
  shuffledDeck = [];
  handCards = cards;
}

function play(players, cards) {
  shuffle(deck);
  deal(players, cards, shuffledDeck);
  if (winners.length === 1) {
    console.log(winners[0].name + ' is the winner!');
  } else {
    while (winners.length > 1) {
      console.log('It\'s a tie! Let\'s go again.');
      shuffle(deck);
      deal(winners, handCards, shuffledDeck);
      if (winners.length === 1) {
        console.log(winners[0].name + ' is the winner!');
      }
    }
  }
}

play(players, 2);
