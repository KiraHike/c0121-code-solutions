/* exported reverse */

function reverse(array) {
  var reverseResult = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverseResult.push(array[i]);
  }
  return reverseResult;
}
