/* exported capitalizeWord */

function capitalizeWord(word) {
  var capitalizeWordResult = '';
  var lowWord = word.toLowerCase();
  if (lowWord === 'javascript') {
    capitalizeWordResult = 'JavaScript';
  } else {
    var letterCap = '';
    var letterLow = '';
    var capitalizeWordArray = lowWord.split(' ');
    for (var i = 0; i < capitalizeWordArray.length; i++) {
      lowWord = capitalizeWordArray[i];
      letterCap = lowWord.substring(0, 1);
      letterLow = lowWord.substring(1);
      capitalizeWordResult += letterCap.toUpperCase() + letterLow.toLowerCase();
    }
  }
  return capitalizeWordResult;
}
