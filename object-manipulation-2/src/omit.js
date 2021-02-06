/* exported omit */

function omit(source, keys) {
  var omitResult = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      omitResult[key] = source[key];
    }
  }
  return omitResult;
}
