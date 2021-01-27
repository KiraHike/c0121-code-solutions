var numberFive = 5;
var numberTwenty = 20;
var numberSeventy = 70;
var maximumValue = Math.max(numberFive, numberSeventy, numberTwenty);

console.log('maximumValue:', maximumValue);

var heroes = ['Batman', 'Spiderman', 'Ironman', 'Wolverine'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Ender\'s Game',
    author: 'Orson Scott Card'
  },
  {
    title: 'Dune',
    author: 'Frank Herbert'
  },
  {
    title: 'The Princess Bride',
    author: 'William Goldman'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

var fullName = 'Kira Hike';
var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
