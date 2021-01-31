/* exported take */

function take(array, count) {
  var takeResult = [];
  if (count < array.length) {
    for (var i = 0; i < count; i++) {
      takeResult.push(array[i]);
    }
  }
  return takeResult;
}
