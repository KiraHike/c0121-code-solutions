/* exported sumAll */

function sumAll(numbers) {
  var sumAllResult = 0;
  for (var i = 0; i < numbers.length; i++) {
    sumAllResult += numbers[i];
  }
  return sumAllResult;
}
