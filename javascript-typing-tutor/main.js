var $char = document.querySelectorAll('span');
var $modal = document.querySelector('.modal');
var $stats = document.querySelector('.stats');
var $buttonYes = document.querySelector('.button-yes');
var $buttonNo = document.querySelector('.button-no');
var i = 0;
var correct = 0;
var incorrect = 0;
var totalType = 0;
var accuracy = 0;

function type(event) {
  if ($char[i].textContent !== event.key) {
    $char[i].className = 'span rd ul';
    incorrect++;
  } else if (i + 1 < $char.length) {
    $char[i].className = 'span gr';
    $char[i + 1].className = 'span bl ul';
    i++;
    correct++;
  } else {
    $char[i].className = 'span gr';
    correct++;
    totalType = correct + incorrect;
    accuracy = Math.floor(correct / totalType * 100);
    $modal.className = 'modal visable';
    $stats.textContent = 'Accuracy: ' + accuracy + '%';
  }
}

function no(event) {
  $modal.className = 'modal hidden';
}

function yes(event) {
  location.reload();
}

document.addEventListener('keydown', type);
$buttonNo.addEventListener('click', no);
$buttonYes.addEventListener('click', yes);
