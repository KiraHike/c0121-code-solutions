/* exported tail */

function tail(array) {
  var tailResult = [];
  for (var i = 1; i < array.length; i++) {
    tailResult.push(array[i]);
  }
  return tailResult;
}
