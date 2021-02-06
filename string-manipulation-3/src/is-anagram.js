/* exported isAnagram */

function isAnagram(firstString, secondString) {
  var firstArray = firstString.split('');
  var firstSort = firstArray.sort();
  var firstStringSorted = '';
  for (var i = 0; i < firstSort.length; i++) {
    if (firstSort[i] !== ' ') {
      firstStringSorted += firstSort[i];
    }
  }

  var secondArray = secondString.split('');
  var secondSort = secondArray.sort();
  var secondStringSorted = '';
  for (var x = 0; x < secondSort.length; x++) {
    if (secondSort[x] !== ' ') {
      secondStringSorted += secondSort[x];
    }
  }

  if (firstStringSorted === secondStringSorted) {
    return true;
  } else {
    return false;
  }
}
