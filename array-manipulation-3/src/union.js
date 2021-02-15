/* exported union */

function union(first, second) {
  var unionResult = [];
  for (var i = 0; i < first.length; i++) {
    var element = first[i];
    unionResult.push(element);
  }
  for (i = 0; i < second.length; i++) {
    element = second[i];
    if (unionResult.indexOf(element) === -1) {
      unionResult.push(element);
    }
  }
  return unionResult;
}
