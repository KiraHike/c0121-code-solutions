/* exported unique */

function unique(array) {
  var uniqueResult = [];
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (uniqueResult.indexOf(element) === -1) {
      uniqueResult.push(element);
    }
  }
  return uniqueResult;
}
