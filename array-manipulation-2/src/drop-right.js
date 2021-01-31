/* exported dropRight */

function dropRight(array, count) {
  var dropRightResult = [];
  var indexVar = array.length - count;
  if (count < array.length) {
    for (var i = 0; i < indexVar; i++) {
      dropRightResult.push(array[i]);
    }
  }
  return dropRightResult;
}
