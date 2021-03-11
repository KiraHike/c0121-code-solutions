let count = 3;
let timeoutID = null;

function countdown() {
  if (count >= 0) {
    console.log(count);
    count--;
  } else {
    console.log('Blast off!');
    clearInterval(timeoutID);
  }
}

timeoutID = setInterval(countdown, 1000);
