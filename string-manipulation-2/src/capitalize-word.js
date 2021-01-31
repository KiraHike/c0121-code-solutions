/* exported capitalizeWord */

function capitalizeWord(word) {
  var capitalizeWordResult = '';
  var lowWord = word.toLowerCase();
  if (lowWord === 'javascript') {
    capitalizeWordResult = 'JavaScript';
  } else {
    var letterCap = lowWord.substring(0, 1);
    var letterLow = lowWord.substring(1);
    capitalizeWordResult += letterCap.toUpperCase() + letterLow.toLowerCase();
  }
  return capitalizeWordResult;
}
