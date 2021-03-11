const fs = require('fs');

function createEntry(entry) {
  const file = require('./data.json');
  file.notes[file.nextId] = entry;
  file.nextId = file.nextId++;
  const data = JSON.stringify(file, null, 2);
  fs.writeFile('./data.json', data, err => {
    if (err) throw err;
  });
}

createEntry(process.argv[2]);
