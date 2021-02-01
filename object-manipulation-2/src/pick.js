/* exported pick */

function pick(source, keys) {
  var pickResult = {};
  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (key === keys[i]) {
        pickResult[key] = source[key];
      }
    }
  }
  return pickResult;
}
