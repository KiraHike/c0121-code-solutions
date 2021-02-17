var $head = document.querySelector('h1');

function countdown() {
  if ($head.textContent === '4') {
    $head.textContent = '3';
  } else if ($head.textContent === '3') {
    $head.textContent = '2';
  } else if ($head.textContent === '2') {
    $head.textContent = '1';
  } else {
    $head.textContent = '~Earth Beeeelooowww Us~';
  }
}

setInterval(countdown, 1 * 1000);
