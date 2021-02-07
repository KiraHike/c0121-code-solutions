/* exported isPalindromic */

function isPalindromic(string) {
  var stringNoSpaces = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      stringNoSpaces += string[i];
    }
  }
  var lastIndex = stringNoSpaces.length - 1;
  var stringReversed = '';
  for (var x = lastIndex; x >= 0 && x < stringNoSpaces.length; x--) {
    if (stringNoSpaces[x] !== ' ') {
      stringReversed += stringNoSpaces[x];
    }
  }
  if (stringNoSpaces === stringReversed) {
    return true;
  } else {
    return false;
  }
}
