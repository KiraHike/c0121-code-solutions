/* exported todos */

var todos = [];
// an empty array literal is being assigned as the value of the variable todos//
var previousTodosJSON = localStorage.getItem('javascript-local-storage');
// the getItem method of the localStorage object is being called with one argument//
// the string javascript-local-storage and the return value is being assigned as the//
// value of the variable previousTodosJSON//
if (previousTodosJSON !== null) {
  // an if statment with condition the value of the variable previousTodosJSON is not//
  // strictly equal to null followed by the opening curly brace for the statement block//
  todos = JSON.parse(previousTodosJSON);
  // the parse method of the JSON object is being called with one argument the value//
  // of the variable previousTodosJSON and the return value is being assigned as the//
  // value of the variable todos//
}
// the closing curly brace for the if statement block//

window.addEventListener('beforeunload', store);
// the addEventListener method of the window object is being called with two arguments//
// the string beforeunload and the value of the variable store//

function store(event) {
  // a function definition named store with one parameter event followed by the//
  // opening curly brace for the definition block//
  event.preventDefault();
  // the preventDefault method of the event object is being called with no arguments//
  var todosJSON = JSON.stringify(todos);
  // the stringify method of the JSON object is being called with one argument//
  // the value of the variable todos and the return value is being assigned as the//
  // value of the variable todosJSON//
  localStorage.setItem('javascript-local-storage', todosJSON);
  // the setItem method of the localStorage object is being called with two arguments//
  // the string javascript-local-storage and the value of the variable todosJSON//
}
// the closing curly brace for the definition block//
