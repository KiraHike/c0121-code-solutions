/* exported equal */

function equal(first, second) {
  if (first.length >= second.length) {
    var longArray = first;
  } else {
    longArray = second;
  }
  for (var i = 0; i < longArray.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
