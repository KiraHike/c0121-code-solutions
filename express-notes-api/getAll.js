const file = require('./data.json');

function getAllNotes(req, res) {
  const notesArray = [];
  for (const id in file.notes) {
    notesArray.push(file.notes[id]);
  }
  res.status(200).json(notesArray);
}

module.exports = getAllNotes;
