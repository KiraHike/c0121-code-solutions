var $modal = document.querySelector('.modal');
var $openButton = document.querySelector('.button-open');
var $modalButton = document.querySelector('.button-modal');

function openModal(event) {
  $modal.className = 'modal visable';
}

function closeModal(event) {
  $modal.className = 'modal hidden';
}

$openButton.addEventListener('click', openModal);
$modalButton.addEventListener('click', closeModal);
