/* global uuid, todos */

var $todoForm = document.querySelector('#todo-form');
// the querySelector method of the document object is being called with one//
// argument the string hashtag todo-form and the return value is being//
// assigned to the value of the variable dollar todoForm//
$todoForm.addEventListener('submit', function (event) {
  // the addEventListener method of the dollar todoForm object is being called//
  // with two arguments the string submit and an anonymous function definition//
  // with one parameter event followed by the opening curly brace for the definition block//
  event.preventDefault();
  // the preventDefault method of the event object is being called with no arguments//
  var todo = {
  // an object literal is being assigned as the value of the variable todo//
    todoId: uuid.v4(),
    // the v4 method of the uuid object is being called with no arguments and//
    // the return value is being assigned to property todoId//
    task: $todoForm.elements.task.value,
    // the value of the value property of the object stored within the task property//
    // of the object stored within the elements property of the dollar todoForm object//
    // is being assigned to the property task//
    isCompleted: false
    // the boolean false is being assigned as the value of the property isCompleted//
  };
  // the closing curly brace for the object literal//
  todos.push(todo);
  // the push method of the todos object is being called with one argument todo//
  $todoList.append(renderTodo(todo));
  // the append method of the dollar todoList object is being called with one argument//
  // the return of calling the function renderTodo with one argument todo//
  $todoForm.reset();
  // the reset method of the dollar todoForm object is being called with no arguments//
});
// the closing curly brace for the function definition followed by the closing parentheses//
// for the method argument list//

var $todoList = document.querySelector('#todo-list');
// the querySelector method of the document object is being called with one argument the string//
// hashtag todo-list and the return value is being assigned as the value of the variable//
// dollar todoList//

$todoList.addEventListener('change', function (event) {
  // the addEventListener method of the dollar todoList object is being called with two arguments//
  // the string change and an anonymous function definition with one parameter event//
  var todoId = event.target.getAttribute('id');
  // the getAttribute method of the target property of the event object is being called with one//
  // argument the string id and the return value is being assigned as the value of the variable todoId//
  for (var i = 0; i < todos.length; i++) {
    // a for loop with an initialization of the number zero being assigned as the value of the variable i//
    // and a conditon the value of the variable i is less than the length property of the todos object and a final expression the//
    // value of the variable i being incremented by one followed by the opening curly brace for the loop code block//
    if (todos[i].todoId === todoId) {
      // an if statement with conditon the todoId property of the todos object at i is strictly equal//
      // to the value of the variable todoId followed by the opening curly brace for the statement block//
      todos[i].isCompleted = event.target.checked;
      // the value of the checked property of the object stored within the target property of the event object//
      // is being assigned as the value of the isCompleted property of the todos object at i//
      break;
      // a break statement//
    }
    // the closing curly brace for the if statement block//
  }
  // the closing curly brace for the loop code block//
});
// the closing curly brace for the function definition followed by the closing parentheses for//
// the method argument list//

for (var i = 0; i < todos.length; i++) {
  // a for loop with an initialization of the number zero being assigned as the value of the variable i//
  // a condition the value of the variable i is less than the length property of the todos object and a final//
  // expression of the value of the variable i being incremented by one followed by the opening curly brace//
  // for the loop code block//
  var $todo = renderTodo(todos[i]);
  // the renderTodo function is being called with one argument the value of the variable todos at i and the//
  // return value is being assigned as the value of the variable dollar todo//
  $todoList.appendChild($todo);
  // the appendChild method of the dollar todoList object is being called with one argument//
  // the value of the variable dollar todo//
}
// the closing curly brace for the loop code block//
function renderTodo(todo) {
// a function definition named renderTodo with one parameter todo followed by the opening curly brace//
// for the definition block//
  /**
   * <li class="list-group-item">
   * //an opening tag for an li element with attribute class with a value of list-group-item//
   *   <div class="form-check d-flex">
   * //an opening tag for a div element with attribute class with values form-check and d-flex//
   *     <input
   * //there is an input element tag//
   *       type="checkbox"
   * //attribute type with a value of checkbox//
   *       id="{todo.todoId}"
   * //attribute id with a value of the value of the todoId property of the todo object//
   *       class="form-check-input">
   * //attribute class with a value of form-check-input//
   *     <label
   * //an opening tag for a label element//
   *       for="{todo.todoId}"
   * //attribute for with a value of the value of the todoId property of the todo object//
   *       class="form-check-label flex-grow-1 ml-2">
   * //attribute class with values form-check-label, flex-grow-1 and ml-2//
   *       {todo.task}
   * //the value of the task property of the todo object//
   *     </label>
   * //a closing tag for a label element//
   *   </div>
   * //a closing tag for a div element//
   * </li>
   * //a closing tag for an li element//
   */

  var $todo = document.createElement('li');
  // the createElement method of the document object is being called with one argument//
  // the string li and the return value is being assigned as the value of the variable dollar todo//
  $todo.setAttribute('class', 'list-group-item');
  // the setAttribute method of the dollar todo object is being called with two arguments//
  // the string class and the string list-group-item//

  var $formCheck = document.createElement('div');
  // the createElement method of the document object is being called with one argument//
  // the string div and the return value is being assigned as the value of the variable dollar formCheck//
  $formCheck.setAttribute('class', 'form-check d-flex');
  // the setAttribute method of the dollar formCheck object is being called with two arguments//
  // the string class and the string form-check d-flex//

  var $checkbox = document.createElement('input');
  // the createElement method of the document object is being called with one argument//
  // the string input and the return value is being assigned as the value of the variable dollar checkbox//
  $checkbox.checked = todo.isCompleted;
  // the value of the isCompleted property of the todo object is being assigned as the value//
  // of the checked property of the dollar checkbox object//
  $checkbox.setAttribute('id', todo.todoId);
  // the setAttribute method of the dollar checkbox object is being called with two arguments//
  // the string id and the value of the todoId property of the todo object//
  $checkbox.setAttribute('type', 'checkbox');
  // the setAttribute method of the dollar checkbox object is being called with two arguments//
  // the string type and the string checkbox//
  $checkbox.setAttribute('class', 'form-check-input');
  // the setAttribute method of the dollar checkbox object is being called with two arguments//
  // the string class and the string form-check-input//
  var $label = document.createElement('label');
  // the createElement method of the document object is being called with one argument//
  // the string label and the return value is being assigned as the value of the variable dollar label//
  $label.setAttribute('for', todo.todoId);
  // the setAttribute method of the dollar label object is being called with two arguments//
  // the string for and the value of the todoId property of the todo object//
  $label.setAttribute('class', 'form-check-label flex-grow-1 ml-2');
  // the setAttribute method of the dollar label object is being called with two arguments//
  // the string class and the string form-check-label flex-grow-1 ml-2//
  $label.textContent = todo.task;
  // the value of the task property of the todo object is being assigned as the value of the//
  // textContent property of the dollar label object//

  $todo.append($formCheck);
  // the append method of the dollar todo object is being called with one argument//
  // the value of the variable dollar formCheck//
  $formCheck.append($checkbox, $label);
  // the append method of the dollar formCheck object is being called with two arguments//
  // the value of the variable dollar checkbox and the value of the variable dollar label//

  return $todo;
  // the value of the variable dollar todo is being returned from the function//
}
// the closing curly brace for the definition block//
