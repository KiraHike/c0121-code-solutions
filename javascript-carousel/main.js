var imgs = [
  {
    name: 'Pikachu',
    order: 'one',
    url: 'images/025.png'
  },
  {
    name: 'Bulbasur',
    order: 'two',
    url: 'images/001.png'
  },
  {
    name: 'Charmander',
    order: 'three',
    url: 'images/004.png'
  },
  {
    name: 'Squirtle',
    order: 'four',
    url: 'images/007.png'
  },
  {
    name: 'Jigglypuff',
    order: 'five',
    url: 'images/039.png'
  }
];

var $img = document.querySelector('img');

function navDot() {
  var $dotID = event.target.getAttribute('id');
  for (var i = 0; i < imgs.length; i++) {
    if ($dotID === imgs[i].order) {
      $img.setAttribute('src', imgs[i].url);
      $img.setAttribute('alt', imgs[i].name);
    }
  }
}

var $containerDots = document.querySelector('.container-dots');
$containerDots.addEventListener('click', navDot);
