/* exported equal */

function equal(first, second) {
  var i = 0;
  for (i; i < first.length; i++) {
    for (i; i < second.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
  }
  return true;
}
