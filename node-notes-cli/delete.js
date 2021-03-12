const fs = require('fs');

function deleteEntry(entryId) {
  const file = require('./data.json');
  delete file.notes[entryId];
  const data = JSON.stringify(file, null, 2);
  fs.writeFile('./data.json', data, err => {
    if (err) throw err;
  });
}

module.exports = deleteEntry;
