const db = require('./db');

function getAllGrades(req, res, next) {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const allGrades = result.rows;
      res.status(200).json(allGrades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
}

module.exports = getAllGrades;
