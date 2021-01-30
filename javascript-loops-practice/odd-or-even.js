/* exported oddOrEven */

function oddOrEven(numbers) {
  var oddOrEvenResult = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddOrEvenResult.push('even');
    } else {
      oddOrEvenResult.push('odd');
    }
  }
  return oddOrEvenResult;
}
