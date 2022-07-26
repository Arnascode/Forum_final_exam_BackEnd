/* eslint-disable newline-per-chained-call */

const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('./config');

async function validateRegister(req, res, next) {
  const schema = Joi.object({
    fullName: Joi.string().trim().min(4).max(30).required(),
    email: Joi.string().trim().email().lowercase().required(),
    password: Joi.string().trim().min(5).max(20).required(),
  });
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    console.log('error in validateUserAsync ===', error);
    const formatedError = error.details.map((eObj) => ({
      message: eObj.message,
      field: eObj.path[0],
    }));
    res.status(400).json(formatedError);
  }
}

async function validateLogin(req, res, next) {
  const schema = Joi.object({
    email: Joi.string().trim().email().lowercase().required(),
    password: Joi.string().trim().min(5).max(20).required(),
  });
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    console.log('error in validateLoginAsync ===', error);
    const formatedError = error.details.map((eObj) => ({
      message: eObj.message,
      field: eObj.path[0],
    }));
    res.status(400).json(formatedError);
  }
}

async function validateQuest(req, res, next) {
  const schema = Joi.object({
    title: Joi.string().min(3).max(25).required(),
    content: Joi.string().trim().max(600).required(),
  });

  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    console.log('schema.validateAsync===', error);
    res.status(400).json(error.details);
  }
}
async function validateAnswer(req, res, next) {
  const schema = Joi.object({
    answer: Joi.string().min(3).max(800).required(),
  });

  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    console.log('schema.validateAsync===', error);
    res.status(400).json(error.details);
  }
}

async function validateToken(req, res, next) {
  const tokenFromHeaders = req.headers.authorization?.split(' ')[1];
  if (!tokenFromHeaders) {
    res.status(401).json({
      success: false,
      error: 'invalid token',
    });
    return;
  }
  try {
    const tokenPayLoad = jwt.verify(tokenFromHeaders, jwtSecret);
    const { userId } = tokenPayLoad;
    req.userId = userId;
    next();
  } catch (error) {
    console.log('error in verify  ===', error);
    res.status(403).json({
      success: false,
      error: 'Invalid token',
    });
  }
}

module.exports = {
  validateRegister,
  validateToken,
  validateLogin,
  validateQuest,
  validateAnswer,
};
