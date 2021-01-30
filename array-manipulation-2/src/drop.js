/* exported drop */

function drop(array, count) {
  var dropResult = [];
  if (count < array.length) {
    for (var i = count; i < array.length; i++) {
      dropResult.push(array[i]);
    }
  }
  return dropResult;
}
