const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

function putGrade(req, res, next) {
  const gradeId = parseInt(req.params.gradeId, 10);
  const course = req.body.course;
  const name = req.body.name;
  const score = Number(req.body.score);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'gradeId must be a positive integer' });
    return;
  } else if (!course) {
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
    update "grades"
       set "course" = $1,
           "name" = $2,
           "score" = $3
     where "gradeId" = $4
     returning *;
    `;
  const params = [course, name, score, gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with gradeId ${gradeId}` });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
}

module.exports = putGrade;
