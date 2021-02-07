/* exported reverseWords */

function reverseWords(string) {
  var reverseWordsResult = '';
  var splitArray = string.split(' ');
  var lastIndex;
  for (var i = 0; i < splitArray.length; i++) {
    lastIndex = splitArray[i].length - 1;
    while (lastIndex >= 0) {
      reverseWordsResult += splitArray[i][lastIndex--];
    }
    reverseWordsResult += ' ';
  }
  reverseWordsResult = reverseWordsResult.trim();
  return reverseWordsResult;
}
