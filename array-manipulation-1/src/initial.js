/* exported initial */

function initial(array) {
  var initialResult = [];
  for (var i = 0; i < array.length - 1; i++) {
    initialResult.push(array[i]);
  }
  return initialResult;
}
