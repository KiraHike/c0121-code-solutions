var $char = document.querySelectorAll('span');
// var $modal = document.querySelector('modal');
var i = 0;
// var correct = 0;
// var incorrect = 0;

function type(event) {
  // $modal = '.modal hidden';
  if ($char[i].textContent !== event.key) {
    $char[i].className = '.span rd ul';
    // incorrect++;
  } else if (i + 1 < $char.length) {
    $char[i].className = '.span gr';
    $char[i + 1].className = '.span bl ul';
    i++;
    // correct++;
  } else {
    $char[i].className = '.span gr';
    // correct++;
    // $modal = '.modal visable';
  }
}

document.addEventListener('keydown', type);
