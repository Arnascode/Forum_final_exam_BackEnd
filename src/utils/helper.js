require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2/promise');
const { dbConfig } = require('../config');

async function executeDb(sql, dataToDbArr) {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    const [result] = await conn.execute(sql, dataToDbArr);
    return result;
  } catch (error) {
    console.log('error in executeDb ===', error);
    throw error;
  } finally {
    conn?.end();
  }
}

function hashPassword(plainTextString) {
  return bcrypt.hashSync(plainTextString, 10);
}

function passWordsMatch(enteredPass, storedHash) {
  return bcrypt.compareSync(enteredPass, storedHash);
}

function generateJwtToken(payload) {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) throw new Error('generateJwtToken no secret');
  return jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
}

function verifyJwtToken(token) {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) throw new Error('verifyJwtToken no secret');
  try {
    const payload = jwt.verify(token, jwtSecret);
    return payload;
  } catch (err) {
    console.log('err ===', err.message);
    throw new Error('verifyJwtToken');
  }
}

module.exports = {
  passWordsMatch,
  generateJwtToken,
  verifyJwtToken,
  hashPassword,
  executeDb,
};
