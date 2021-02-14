/* exported intersection */

function intersection(first, second) {
  var intersectionResult = [];
  for (var i = 0; i < first.length; i++) {
    var element = first[i];
    if (second.indexOf(element) !== -1) {
      intersectionResult.push(element);
    }
  }
  for (i = 0; i < second.length; i++) {
    element = second[i];
    if (first.indexOf(element) !== -1 && intersectionResult.indexOf(element) === -1) {
      intersectionResult.push(element);
    }
  }
  return intersectionResult;
}
