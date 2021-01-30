/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var addSuffixToAllResult = [];
  for (var i = 0; i < words.length; i++) {
    addSuffixToAllResult.push(words[i] + suffix);
  }
  return addSuffixToAllResult;
}
