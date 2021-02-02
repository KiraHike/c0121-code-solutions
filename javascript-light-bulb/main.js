var $background = document.querySelector('.background');
var $bulb = document.querySelector('.light-bulb');
var lightSwitch = 'on';

function lightBulb(event) {
  if (lightSwitch === 'on') {
    $background.className = 'background off';
    $bulb.className = 'light-bulb off';
    lightSwitch = 'off';
  } else {
    $background.className = 'background on';
    $bulb.className = 'light-bulb on';
    lightSwitch = 'on';
  }
}

$bulb.addEventListener('click', lightBulb);
