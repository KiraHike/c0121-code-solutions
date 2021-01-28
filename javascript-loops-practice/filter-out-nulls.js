/* exported filterOutNulls */

function filterOutNulls(values) {
  var filterOutNullsResult = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filterOutNullsResult.push(values[i]);
    }
  }
  return filterOutNullsResult;
}
