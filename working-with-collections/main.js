console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  { name: 'Kirk', hand: [] },
  { name: 'Picard', hand: [] },
  { name: 'Janeway', hand: [] },
  { name: 'Archer', hand: [] }
];

var deck = [
  { rank: 'Ace', suit: 'Spades' },
  { rank: 'King', suit: 'Spades' },
  { rank: 'Queen', suit: 'Spades' },
  { rank: 'Jack', suit: 'Spades' },
  { rank: '10', suit: 'Spades' },
  { rank: '9', suit: 'Spades' },
  { rank: '8', suit: 'Spades' },
  { rank: '7', suit: 'Spades' },
  { rank: '6', suit: 'Spades' },
  { rank: '5', suit: 'Spades' },
  { rank: '4', suit: 'Spades' },
  { rank: '3', suit: 'Spades' },
  { rank: '2', suit: 'Spades' },

  { rank: 'Ace', suit: 'Diamonds' },
  { rank: 'King', suit: 'Diamonds' },
  { rank: 'Queen', suit: 'Diamonds' },
  { rank: 'Jack', suit: 'Diamonds' },
  { rank: '10', suit: 'Diamonds' },
  { rank: '9', suit: 'Diamonds' },
  { rank: '8', suit: 'Diamonds' },
  { rank: '7', suit: 'Diamonds' },
  { rank: '6', suit: 'Diamonds' },
  { rank: '5', suit: 'Diamonds' },
  { rank: '4', suit: 'Diamonds' },
  { rank: '3', suit: 'Diamonds' },
  { rank: '2', suit: 'Diamonds' },

  { rank: 'Ace', suit: 'Clubs' },
  { rank: 'King', suit: 'Clubs' },
  { rank: 'Queen', suit: 'Clubs' },
  { rank: 'Jack', suit: 'Clubs' },
  { rank: '10', suit: 'Clubs' },
  { rank: '9', suit: 'Clubs' },
  { rank: '8', suit: 'Clubs' },
  { rank: '7', suit: 'Clubs' },
  { rank: '6', suit: 'Clubs' },
  { rank: '5', suit: 'Clubs' },
  { rank: '4', suit: 'Clubs' },
  { rank: '3', suit: 'Clubs' },
  { rank: '2', suit: 'Clubs' },

  { rank: 'Ace', suit: 'Hearts' },
  { rank: 'King', suit: 'Hearts' },
  { rank: 'Queen', suit: 'Hearts' },
  { rank: 'Jack', suit: 'Hearts' },
  { rank: '10', suit: 'Hearts' },
  { rank: '9', suit: 'Hearts' },
  { rank: '8', suit: 'Hearts' },
  { rank: '7', suit: 'Hearts' },
  { rank: '6', suit: 'Hearts' },
  { rank: '5', suit: 'Hearts' },
  { rank: '4', suit: 'Hearts' },
  { rank: '3', suit: 'Hearts' },
  { rank: '2', suit: 'Hearts' },
];


function shuffle(array) {
  var shuffledDeck = [];
  var shuffledIndexes = [];
  var newIndex;
  for (var i = 0; shuffledIndexes.length < 52; i++) {
    newIndex = Math.floor(Math.random() * Math.floor(53));
    if (shuffledIndexes.indexOf(newIndex) === -1) {
      shuffledIndexes.push(newIndex);
    }
  }
  for (i = 0; i < array.length; i++) {
    shuffledDeck.splice(shuffledIndexes[i], 1, array[i]);
  }
  return shuffledIndexes;
  return shuffledDeck;
}
