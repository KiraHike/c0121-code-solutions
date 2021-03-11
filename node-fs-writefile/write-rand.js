const fs = require('fs');

const data = Math.random().toString();

fs.writeFile('random.txt', data + '\n', err => {
  if (err) throw err;
});
