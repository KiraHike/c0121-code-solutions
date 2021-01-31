/* exported ransomCase */

function ransomCase(string) {
  var ransomCaseResult = '';
  var lowCase = '';
  var upCase = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      lowCase = string[i];
      ransomCaseResult += lowCase.toLowerCase();
    } else {
      upCase = string[i];
      ransomCaseResult += upCase.toUpperCase();
    }
  }
  return ransomCaseResult;
}
