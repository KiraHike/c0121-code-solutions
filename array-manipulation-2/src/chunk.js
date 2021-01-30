/* exported chunk */

function chunk(array, size) {
  var chunkResult = [];
  var indexVar = 0;
  while (indexVar < array.length) {
    chunkResult.push(array.slice(indexVar, size + indexVar));
    indexVar = indexVar + size;
  }
  return chunkResult;
}
