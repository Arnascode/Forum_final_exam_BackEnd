const { executeDb } = require('../utils/helper');

function updateAnswer(answer, id) {
  const sql = 'UPDATE answers SET answer = ? WHERE id = ?';
  return executeDb(sql, [answer, id]);
}

function delAnswer(id) {
  const sql = 'DELETE FROM answers WHERE id = ? LIMIT 1';
  return executeDb(sql, [id]);
}

module.exports = {
  delAnswer,
  updateAnswer,
};
