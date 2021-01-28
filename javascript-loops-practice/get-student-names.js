/* exported getStudentNames */

function getStudentNames(students) {
  var getStudentNamesResult = [];
  var object;
  for (var i = 0; i < students.length; i++) {
    object = students[i];
    for (var key in object) {
      getStudentNamesResult.push(object[key]);
    }
  }
  return getStudentNamesResult;
}
