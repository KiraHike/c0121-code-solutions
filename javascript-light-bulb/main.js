var $background = document.querySelector('.background');
var $bulb = document.querySelector('.light-bulb');
var lightSwitch = true;

function lightBulb(event) {
  if (lightSwitch === true) {
    $background.className = 'background off';
    $bulb.className = 'light-bulb off';
    lightSwitch = false;
  } else {
    $background.className = 'background on';
    $bulb.className = 'light-bulb on';
    lightSwitch = true;
  }
}

$bulb.addEventListener('click', lightBulb);
