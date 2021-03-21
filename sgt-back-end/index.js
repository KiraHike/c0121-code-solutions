const express = require('express');
const getAllGrades = require('./getAll');
const getGrade = require('./get');

const app = express();
const parseJSON = express.json();

app.use(parseJSON);

app.get('/api/grades', getAllGrades);
app.get('/api/grades/:gradeId', getGrade);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express listening on port 3000');
});
