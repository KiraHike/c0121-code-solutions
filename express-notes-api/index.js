const express = require('express');

let nextId = 1;
const notes = {};

const app = express();
const parseJSON = express.json();

app.use(parseJSON);

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const id in notes) {
    notesArray.push(notes[id]);
  }
  res.status(200).json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const replies = {
    invalidId: 'id must be a positive integer',
    noId: `cannot find note with id ${req.params.id}`
  };

  let code;
  let reply;

  if (req.params.id <= 0) {
    code = 400;
    reply = replies.invalidId;
  } else {
    code = 200;
    reply = notes[req.params.id];
  }
  res.status(code).json(reply);
});

app.post('/api/notes', (req, res) => {
  const replies = {
    noContent: 'content is a required field'
  };

  let code;
  let reply;

  if (!req.body.content) {
    code = 400;
    reply = replies.noContent;
  } else {
    const note = req.body;
    notes[nextId] = note;
    notes[nextId].id = nextId;
    nextId++;
    code = 201;
    reply = note;
  }
  res.status(code).json(reply);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express listening on port 3000');
});
