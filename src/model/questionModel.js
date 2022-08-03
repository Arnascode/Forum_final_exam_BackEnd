/* eslint-disable camelcase */
const { executeDb } = require('../utils/helper');

function getQuestDB() {
  const sql = 'SELECT * FROM questions';
  return executeDb(sql);
}

function getQuestAsc() {
  const sql = 'SELECT * FROM questions ORDER BY edit ASC';
  return executeDb(sql);
}
function getQuestDesc() {
  const sql = 'SELECT * FROM questions ORDER BY edit DESC';
  return executeDb(sql);
}
function getAnswerDesc() {
  const sql = `SELECT
  questions.id,
  questions.title,
  questions.content,
  questions.timestamp,
  questions.edit,
  COUNT(answers.id) AS num_answers
FROM
  questions
 LEFT JOIN answers ON answers.question_id = questions.id
GROUP BY
answers.question_id
 ORDER BY
 COUNT( questions.id)
DESC`;
  return executeDb(sql);
}
function getAnswerAsc() {
  const sql = `SELECT
  questions.id,
  questions.title,
  questions.content,
  questions.timestamp,
  questions.edit,
  COUNT(answers.id) AS num_answers
FROM
  questions
 LEFT JOIN answers ON answers.question_id = questions.id
GROUP BY
answers.question_id
 ORDER BY
 COUNT( questions.id)
ASC`;
  return executeDb(sql);
}
function getAnswerQuest() {
  const sql = 'SELECT * FROM questions LEFT JOIN answers ON questions.id = answers.question_id';
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
  getAnswerQuest,
};
