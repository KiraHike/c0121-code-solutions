/* exported difference */

function difference(first, second) {
  var differenceResult = [];
  for (var i = 0; i < first.length; i++) {
    var element = first[i];
    if (second.indexOf(element) === -1) {
      differenceResult.push(element);
    }
  }
  for (i = 0; i < second.length; i++) {
    element = second[i];
    if (first.indexOf(element) === -1) {
      differenceResult.push(element);
    }
  }
  return differenceResult;
}
