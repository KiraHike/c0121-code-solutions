/* exported numVowels */

function numVowels(string) {
  var low = string.toLowerCase();
  var array = [];
  for (var i = 0; i < string.length; i++) {
    if (low[i] === 'a' || low[i] === 'e' || low[i] === 'i' || low[i] === 'o' || low[i] === 'u') {
      array.push(low[i]);
    }
  }
  return array.length;
}
