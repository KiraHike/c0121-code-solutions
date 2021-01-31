/* exported takeRight */

function takeRight(array, count) {
  var takeRightResult = [];
  var indexVar = array.length - count;
  if (count < array.length) {
    for (var i = indexVar; i < array.length; i++) {
      takeRightResult.push(array[i]);
    }
  }
  return takeRightResult;
}
