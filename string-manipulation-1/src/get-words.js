/* exported getWords */

function getWords(string) {
  var getWordsEmpty = [];
  var getWordsResult = string.split(' ');
  if (string === '') {
    return getWordsEmpty;
  } else {
    return getWordsResult;
  }
}
