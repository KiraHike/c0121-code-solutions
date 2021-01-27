function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var minutesToSecondsResult = convertMinutesToSeconds(5);
console.log('minutesToSecondsResult:', minutesToSecondsResult);

function greet(name) {
  var firstName = 'Hey, ' + name;
  return firstName;
}

var greetResult = greet('Kira');
console.log('greetResult:', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var areaResult = getArea(17, 42);
console.log('areaResult:', areaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Kira', lastName: 'Hike' });
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResult:', getLastElementResult);
