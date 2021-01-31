/* exported capitalizeWords */

function capitalizeWords(string) {
  var capitalizeWordsResult = '';
  var word = '';
  var letterCap = '';
  var letterLow = '';
  var capitalizeWordsArray = string.split(' ');
  for (var i = 0; i < capitalizeWordsArray.length; i++) {
    word = capitalizeWordsArray[i];
    letterCap = word.substring(0, 1);
    letterLow = word.substring(1);
    capitalizeWordsResult += ' ' + letterCap.toUpperCase() + letterLow.toLowerCase();
  }
  return capitalizeWordsResult.trim();
}
