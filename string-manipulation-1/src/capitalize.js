/* exported capitalize */

function capitalize(word) {
  var letterCap = word.substring(0, 1);
  var letterLow = word.substring(1);
  var capitalizeResult = letterCap.toUpperCase() + letterLow.toLowerCase();
  return capitalizeResult;
}
