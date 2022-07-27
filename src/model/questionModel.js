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

function getAnswerDB(id) {
  // const sql = 'SELECT answers.answ
  // er FROM answers LEFT JOIN questions ON answers.question_id = questions.id';
  // const sql1 = 'SELECT * FROM answers AND questions WHERE questions.id  = answers.question_id';
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
};
