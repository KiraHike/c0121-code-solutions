/* exported omit */

function omit(source, keys) {
  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (key === keys[i]) {
        delete source[key];
      }
    }
  }
  return source;
}
