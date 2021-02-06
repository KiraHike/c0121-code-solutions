/* exported defaults */

function defaults(target, source) {
  for (var key in source) {
    if (key in target === false) {
      target[key] = source[key];
    }
  }
}
