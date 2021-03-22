const db = require('./db');

function postGrade(req, res, next) {
  const course = req.body.course;
  const name = req.body.name;
  const score = Number(req.body.score);
  if (!course) {
    res.status(400).json({ error: 'course is a required field' });
    return;
  } else if (!name) {
    res.status(400).json({ error: 'name is a required field' });
    return;
  } else if (!score) {
    res.status(400).json({ error: 'score is a required field' });
    return;
  } else if (!Number.isInteger(score) || score < 1 || score > 100) {
    res.status(400).json({ error: 'score must be an integer from 1 to 100' });
    return;
  }
  const sql = `
    insert into "grades" ("course", "name", "score")
    values ($1, $2, $3)
    returning *;
    `;
  const params = [course, name, score];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
}

module.exports = postGrade;
