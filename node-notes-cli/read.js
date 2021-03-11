const fs = require('fs');

fs.readFile('./data.json', 'utf8', (err, data) => {
  if (err) throw err;
  const file = require('./data.json');
  for (const key in file.notes) {
    console.log(key + ': ' + file.notes[key]);
  }
});
