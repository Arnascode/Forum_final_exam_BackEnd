/* eslint-disable camelcase */
const { executeDb } = require('../utils/helper');

function getQuestDB() {
  const sql = 'SELECT * FROM questions';
  return executeDb(sql);
}

function saveQuest(title, content, user_id) {
  const sql = 'INSERT INTO questions (title, content, user_id ) VALUES (?, ?, ?)';
  return executeDb(sql, [title, content, user_id]);
}

function updateQuest(title, content, id) {
  const sql = 'UPDATE questions SET title = ?, content = ? WHERE id = ?';
  return executeDb(sql, [title, content, id]);
}

function delQuest(id) {
  const sql = 'DELETE FROM questions WHERE id = ?';
  return executeDb(sql, [id]);
}

module.exports = {
  saveQuest,
  getQuestDB,
  updateQuest,
  delQuest,
};
