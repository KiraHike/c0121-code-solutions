const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

function calculator(num1, type, num2) {
  if (type === 'plus') {
    console.log(add(num1, num2));
  } else if (type === 'minus') {
    console.log(subtract(num1, num2));
  } else if (type === 'times') {
    console.log(multiply(num1, num2));
  } else if (type === 'over') {
    console.log(divide(num1, num2));
  }
}

calculator(process.argv[2], process.argv[3], process.argv[4]);
