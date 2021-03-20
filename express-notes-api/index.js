const express = require('express');
const getAllNotes = require('./getAll');
const getNote = require('./get');
const postNote = require('./post');
const putNote = require('./put');
const deleteNote = require('./delete');

const app = express();
const parseJSON = express.json();

app.use(parseJSON);

app.get('/api/notes', getAllNotes);
app.get('/api/notes/:id', getNote);
app.post('/api/notes', postNote);
app.put('/api/notes/:id', putNote);
app.delete('/api/notes/:id', deleteNote);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express listening on port 3000');
});
