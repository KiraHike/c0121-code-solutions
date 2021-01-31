/* exported numVowels */

function numVowels(string) {
  var low = string.toLowerCase();
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (low[i] === 'a' || low[i] === 'e' || low[i] === 'i' || low[i] === 'o' || low[i] === 'u') {
      counter += 1;
    }
  }
  return counter;
}
