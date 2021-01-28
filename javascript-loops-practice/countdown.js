/* exported countdown */

function countdown(number) {
  var countdownResult = [];
  while (number >= 0) {
    countdownResult.push(number--);
  }
  return countdownResult;
}
