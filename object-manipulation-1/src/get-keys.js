/* exported getKeys */

function getKeys(object) {
  var getKeysResult = [];
  for (var keys in object) {
    getKeysResult.push(keys);
  }
  return getKeysResult;
}
