/* exported getValues */

function getValues(object) {
  var getValuesResult = [];
  for (var keys in object) {
    getValuesResult.push(object[keys]);
  }
  return getValuesResult;
}
