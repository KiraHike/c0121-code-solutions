var student = {
  firstName: 'Kira',
  lastName: 'Hike',
  age: 37
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Office Assistant';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Ford',
  model: 'Mustang',
  year: 1968
};

vehicle['color'] = 'green';
vehicle['isConvertible'] = false;

console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Sushi',
  type: 'cat'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
