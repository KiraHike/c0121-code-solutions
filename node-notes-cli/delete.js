const fs = require('fs');

function deleteEntry(entryId) {
  const file = require('./data.json');
  for (const key in file.notes) {
    if (key === entryId) {
      delete file.notes[key];
      const data = JSON.stringify(file, null, 2);
      fs.writeFile('./data.json', data, err => {
        if (err) throw err;
      });
    }
  }
}

module.exports = deleteEntry;
