const fs = require('fs');
const file = require('./data.json');
const message = require('./messages.json');
const express = require('express');

const app = express();
const parseJSON = express.json();

app.use(parseJSON);

function getAllNotes(req, res) {
  fs.readFile('./data.json', 'utf8', (err) => {
    if (err) {
      res.status(500).json(message.generic);
    } else {
      const notesArray = [];
      for (const id in file.notes) {
        notesArray.push(file.notes[id]);
      }
      res.status(200).json(notesArray);
    }
  });
};

module.exports = getAllNotes;
