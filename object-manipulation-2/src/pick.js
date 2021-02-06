/* exported pick */

function pick(source, keys) {
  var pickResult = {};
  for (var key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      pickResult[key] = source[key];
    }
  }
  return pickResult;
}
