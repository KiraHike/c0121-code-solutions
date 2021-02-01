function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('target:', event.target);
}

var $clickButtonClass = document.querySelector('.click-button');

$clickButtonClass.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('target:', event.target);
}

var $hoverButtonClass = document.querySelector('.hover-button');

$hoverButtonClass.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('target:', event.target);
}

var $doubleClickButtonClass = document.querySelector('.double-click-button');

$doubleClickButtonClass.addEventListener('dblclick', handleDoubleClick);
