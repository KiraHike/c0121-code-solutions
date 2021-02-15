/* exported zip */

function zip(first, second) {
  var zipResult = [];
  var lastIndex;
  if (first.length <= second.length) {
    lastIndex = first.length - 1;
  } else {
    lastIndex = second.length - 1;
  }
  for (var i = 0; i <= lastIndex; i++) {
    var subArray = [];
    subArray.push(first[i]);
    subArray.push(second[i]);
    zipResult.push(subArray);
  }
  return zipResult;
}
