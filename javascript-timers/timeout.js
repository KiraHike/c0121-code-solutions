var $head = document.querySelector('h1');

function greet() {
  $head.textContent = 'Hello There';
}

setTimeout(greet, 2 * 1000);
