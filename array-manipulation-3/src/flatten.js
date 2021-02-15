/* exported flatten */

function flatten(array) {
  var flattenResult = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      var subArray = array[i];
      for (var x = 0; x < subArray.length; x++) {
        flattenResult.push(subArray[x]);
      }
    } else {
      flattenResult.push(array[i]);
    }
  }
  return flattenResult;
}
