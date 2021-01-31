/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var firstChar = string.slice(firstIndex, firstIndex + 1);
  var secondChar = string.slice(secondIndex, secondIndex + 1);
  var firstString = string.slice(0, firstIndex);
  var secondString = string.slice(firstIndex + 1, secondIndex);
  var thirdString = string.slice(secondIndex + 1);
  var swapCharsResult = firstString + secondChar + secondString + firstChar + thirdString;
  return swapCharsResult;
}
