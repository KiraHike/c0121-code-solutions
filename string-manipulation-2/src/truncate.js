/* exported truncate */

function truncate(length, string) {
  var truncateResult = string.slice(0, length) + '...';
  return truncateResult;
}
