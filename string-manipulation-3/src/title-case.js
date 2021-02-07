/* exported titleCase */

var lowAPA = ['a', 'an', 'the', 'at', 'by', 'down', 'for', 'from', 'in', 'into',
  'like', 'near', 'of', 'off', 'on', 'onto', 'over', 'past', 'to', 'upon',
  'with', 'and', 'as', 'but', 'if', 'nor', 'once', 'or', 'so', 'than', 'that',
  'till', 'when', 'yet'];

function titleCase(title) {
  title = title.toLowerCase();

  var splitArray = title.split(' ');
  var letterCap = '';
  var letterLow = '';
  var titleCaseResult = '';

  for (var i = 0; i < splitArray.length; i++) {
    if (splitArray[i].includes('javascript')) {
      titleCaseResult += splitArray[i].replace('javascript', 'JavaScript');
    } else if (splitArray[i].includes('api')) {
      titleCaseResult += splitArray[i].replace('api', 'API');
    } else if (splitArray[i].includes('-')) {
      var dashArray = splitArray[i].split('-');
      letterCap = dashArray[0].substring(0, 1);
      letterLow = dashArray[0].substring(1);
      titleCaseResult += letterCap.toUpperCase() + letterLow + '-';
      letterCap = dashArray[1].substring(0, 1);
      letterLow = dashArray[1].substring(1);
      titleCaseResult += letterCap.toUpperCase() + letterLow;
    } else if (lowAPA.includes(splitArray[i])) {
      titleCaseResult += splitArray[i];
    } else {
      letterCap = splitArray[i].substring(0, 1);
      letterLow = splitArray[i].substring(1);
      titleCaseResult += letterCap.toUpperCase() + letterLow;
    }
    titleCaseResult += ' ';
  }

  splitArray = titleCaseResult.split(': ');
  titleCaseResult = splitArray[0];

  for (var x = 1; x < splitArray.length; x++) {
    letterCap = splitArray[x].substring(0, 1);
    letterLow = splitArray[x].substring(1);
    titleCaseResult += ': ' + letterCap.toUpperCase() + letterLow;
  }

  titleCaseResult = titleCaseResult.trim();
  return titleCaseResult;
}
