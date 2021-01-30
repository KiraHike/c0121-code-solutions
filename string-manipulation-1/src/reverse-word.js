/* exported reverseWord */

function reverseWord(word) {
  var reverseWordResult = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverseWordResult += word[i];
  }
  return reverseWordResult;
}
