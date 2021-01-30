/* exported isVowel */

function isVowel(char) {
  var low = char.toLowerCase();
  if (low === 'a' || low === 'e' || low === 'i' || low === 'o' || low === 'u') {
    return true;
  }
  return false;
}
