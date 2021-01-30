/* exported compact */

function compact(array) {
  var compactResult = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      compactResult.push(array[i]);
    }
  }
  return compactResult;
}
