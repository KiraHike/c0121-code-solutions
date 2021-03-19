const express = require('express');

let nextId = 1;
const grades = {};

const app = express();
const parseJSON = express.json();

app.use(parseJSON);

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const grade = req.body;
  grades[nextId] = grade;
  grades[nextId].id = nextId;
  nextId++;
  res.status(201);
  res.json(grade);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express listening on port 3000');
});
