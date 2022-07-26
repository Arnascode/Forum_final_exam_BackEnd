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

module.exports = {
  saveQuest,
  getQuestDB,
};
