const file = require('./data.json');
const message = require('./messages.json');

function getNote(req, res) {
  if (isNaN(req.params.id) || Math.floor(req.params.id) <= 0) {
    res.status(404).json(message.invalidId);
  } else if (req.params.id in file.notes === false) {
    res.status(404).json(message.noId);
  } else {
    const note = file.notes[req.params.id];
    res.status(200).json(note);
  }
}

module.exports = getNote;
