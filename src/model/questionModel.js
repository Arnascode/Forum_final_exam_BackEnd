/* eslint-disable camelcase */
const { executeDb } = require('../utils/helper');

function getQuestDB() {
  const sql = 'SELECT * FROM questions';
  return executeDb(sql);
}

function getQuestAsc() {
  // const sql = 'SELECT COUNT (*) FROM questions GROUP BY MINUTE(edit)';
  // const sql = 'SELECT date(timestamp, %i) count(1) FROM questions GROUP BY 1';
  // const sql = 'SELECT COUNT(edit)content FROM questions GROUP BY edit ORDER BY COUNT(edit) DESC';
  const sql = 'SELECT * FROM questions ORDER BY edit ASC';
  return executeDb(sql);
}
function getQuestDesc() {
  const sql = 'SELECT * FROM questions ORDER BY edit DESC';
  return executeDb(sql);
}
function getAnswerDesc() {
  const sql = 'SELECT COUNT(id), question_id FROM answers GROUP BY question_id ORDER BY COUNT(id)';
  return executeDb(sql);
}
function getAnswerAsc() {
  const sql = 'SELECT COUNT(id), question_id FROM answers GROUP BY question_id ORDER BY COUNT(id) ASC';
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
  const sql = 'DELETE FROM questions WHERE id = ? LIMIT 1';
  return executeDb(sql, [id]);
}

function getAnswerDB(id) {
  const sql = `SELECT * FROM answers WHERE question_id=${id.id} `;
  return executeDb(sql, [id]);
}

function saveAnswer(answer, question_id, user_id) {
  const sql = 'INSERT INTO answers (answer, question_id, user_id ) VALUES (?, ?, ?)';
  return executeDb(sql, [answer, question_id, user_id]);
}

module.exports = {
  saveQuest,
  getQuestDB,
  updateQuest,
  delQuest,
  saveAnswer,
  getAnswerDB,
  getQuestAsc,
  getQuestDesc,
  getAnswerDesc,
  getAnswerAsc,
};
