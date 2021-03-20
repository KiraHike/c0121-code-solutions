const fs = require('fs');
const file = require('./data.json');
const message = require('./messages.json');

function postNote(req, res) {
  if (!req.body.content) {
    res.status(400).json(message.noContent);
  } else {
    const note = req.body;
    file.notes[file.nextId] = note;
    file.notes[file.nextId].id = file.nextId;
    file.nextId++;
    const data = JSON.stringify(file, null, 2);
    fs.writeFile('./data.json', data, err => {
      if (err) {
        res.status(500).json(message.generic);
      } else {
        res.status(201).json(note);
      }
    });
  }
}

module.exports = postNote;
