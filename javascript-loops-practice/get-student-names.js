/* exported getStudentNames */

function getStudentNames(students) {
  var getStudentNamesResult = [];
  for (var i = 0; i < students.length; i++) {
    getStudentNamesResult.push(students[i].name);
  }
  return getStudentNamesResult;
}
