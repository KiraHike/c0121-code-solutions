/* exported ransomCase */

function ransomCase(string) {
  var ransomCaseResult = '';
  var lowCase = '';
  var upCase = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      lowCase = string.substring(i, i + 1);
      ransomCaseResult += lowCase.toLowerCase();
    } else {
      upCase = string.substring(i, i + 1);
      ransomCaseResult += upCase.toUpperCase();
    }
  }
  return ransomCaseResult;
}
