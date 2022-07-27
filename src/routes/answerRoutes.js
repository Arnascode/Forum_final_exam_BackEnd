const express = require('express');
const { validateToken } = require('../middleware');

const controller = require('../controllers/answerController');

const answerRoutes = express.Router();

answerRoutes.patch('/answers/:id', validateToken, controller.changeAnswer);

answerRoutes.delete('/answers/:id', validateToken, controller.deleteAnswer);

module.exports = answerRoutes;
