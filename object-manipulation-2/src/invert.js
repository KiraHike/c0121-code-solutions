/* exported invert */

function invert(source) {
  var invertResult = {};
  var value;
  for (var key in source) {
    value = source[key];
    invertResult[value] = key;
  }
  return invertResult;
}
