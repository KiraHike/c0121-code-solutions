const fs = require('fs');
const file = require('./data.json');
const message = require('./messages.json');

function putNote(req, res) {
  if (isNaN(req.params.id) || Math.floor(req.params.id) <= 0) {
    res.status(404).json(message.invalidId);
  } else if (req.params.id in file.notes === false) {
    res.status(404).json(message.noId);
  } else if (!req.body.content) {
    res.status(400).json(message.noContent);
  } else {
    const note = req.body;
    file.notes[req.params.id] = note;
    file.notes[req.params.id].id = Number(req.params.id);
    const data = JSON.stringify(file, null, 2);
    fs.writeFile('./data.json', data, err => {
      if (err) {
        res.status(500).json(message.generic);
      } else {
        res.status(200).json(note);
      }
    });
  }
}

module.exports = putNote;
