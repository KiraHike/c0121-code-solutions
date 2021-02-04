var $taskList = document.querySelector('.task-list');

function removeTask(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var closestElement = event.target.closest('.task-list-item');
    console.log('closestElement:', closestElement);
    closestElement.remove();
  }
}

$taskList.addEventListener('click', removeTask);
