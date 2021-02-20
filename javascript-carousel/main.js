var imgs = [
  {
    name: 'Pikachu',
    url: 'images/025.png'
  },
  {
    name: 'Bulbasur',
    url: 'images/001.png'
  },
  {
    name: 'Charmander',
    url: 'images/004.png'
  },
  {
    name: 'Squirtle',
    url: 'images/007.png'
  },
  {
    name: 'Jigglypuff',
    url: 'images/039.png'
  }
];

var $img = document.querySelector('img');
var $containerDots = document.querySelector('.container-dots');
var $dotsList = document.querySelectorAll('.fa-circle');
var $chevronLeft = document.querySelector('.fa-chevron-left');
var $chevronRight = document.querySelector('.fa-chevron-right');
var counter = 0;
var lastIndex = imgs.length - 1;

function navDot() {
  if (event.target.matches('i')) {
    counter = Number(event.target.getAttribute('order'));
    for (var i = 0; i < imgs.length; i++) {
      if (counter === i) {
        $img.setAttribute('order', counter);
        $img.setAttribute('src', imgs[i].url);
        $img.setAttribute('alt', imgs[i].name);
        event.target.className = 'dot-full fas fa-circle';
      }
    }
    for (var x = 0; x < $dotsList.length; x++) {
      if (Number($dotsList[x].getAttribute('order')) !== counter) {
        $dotsList[x].className = 'dot-open far fa-circle';
      }
    }
  }
}

function slideLeft() {
  counter = Number($img.getAttribute('order'));
  if (counter === 0) {
    counter = lastIndex;
    $img.setAttribute('order', counter);
    $img.setAttribute('src', imgs[counter].url);
    $img.setAttribute('alt', imgs[counter].name);
    $dotsList[counter].className = 'dot-full fas fa-circle';
  } else {
    counter--;
    $img.setAttribute('order', counter);
    $img.setAttribute('src', imgs[counter].url);
    $img.setAttribute('alt', imgs[counter].name);
    $dotsList[counter].className = 'dot-full fas fa-circle';
  }
  for (var x = 0; x < $dotsList.length; x++) {
    if (Number($dotsList[x].getAttribute('order')) !== counter) {
      $dotsList[x].className = 'dot-open far fa-circle';
    }
  }
}

function slideRight() {
  counter = Number($img.getAttribute('order'));
  if (counter === lastIndex) {
    counter = 0;
    $img.setAttribute('order', counter);
    $img.setAttribute('src', imgs[counter].url);
    $img.setAttribute('alt', imgs[counter].name);
    $dotsList[counter].className = 'dot-full fas fa-circle';
  } else {
    counter++;
    $img.setAttribute('order', counter);
    $img.setAttribute('src', imgs[counter].url);
    $img.setAttribute('alt', imgs[counter].name);
    $dotsList[counter].className = 'dot-full fas fa-circle';
  }
  for (var x = 0; x < $dotsList.length; x++) {
    if (Number($dotsList[x].getAttribute('order')) !== counter) {
      $dotsList[x].className = 'dot-open far fa-circle';
    }
  }
}

$containerDots.addEventListener('click', navDot);
$chevronLeft.addEventListener('click', slideLeft);
$chevronRight.addEventListener('click', slideRight);

setInterval(slideRight, 3000);
