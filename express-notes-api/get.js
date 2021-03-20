const fs = require('fs');
const file = require('./data.json');
const message = require('./messages.json');
const express = require('express');

const app = express();
const parseJSON = express.json();

app.use(parseJSON);

function getNote(req, res) {
  if (isNaN(req.params.id) || Math.floor(req.params.id) <= 0) {
    res.status(404).json(message.invalidId);
  } else if (!file.notes.hasOwnProperty(req.params.id)) {
    res.status(404).json(message.noId);
  } else {
    fs.readFile('./data.json', 'utf8', () => {
      const note = file.notes[req.params.id];
      res.status(200).json(note);
    });
  }
};

module.exports = getNote;
