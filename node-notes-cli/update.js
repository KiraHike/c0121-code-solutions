const fs = require('fs');

function updateEntry(entryId, updatedEntry) {
  const file = require('./data.json');
  for (const key in file.notes) {
    if (key === entryId) {
      file.notes[key] = updatedEntry;
      const data = JSON.stringify(file, null, 2);
      fs.writeFile('./data.json', data, err => {
        if (err) throw err;
      });
    }
  }
}

module.exports = updateEntry;
