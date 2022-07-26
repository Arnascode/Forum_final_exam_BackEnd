const { executeDb } = require('../utils/helper');

function saveUser(fullName, email, password) {
  const sql = 'INSERT INTO users (fullName, email, password) VALUES (?, ?, ?)';
  return executeDb(sql, [fullName, email, password]);
}

function findUserByEmail(email) {
  const sql = 'SELECT * FROM users WHERE email = ?';
  return executeDb(sql, [email]);
}

module.exports = {
  saveUser,
  findUserByEmail,
};
