const express = require('express');
const { validateToken, validateQuest, validateAnswer } = require('../middleware');

const controller = require('../controllers/questionController');

const questRoutes = express.Router();

questRoutes.post('/question', validateToken, validateQuest, controller.addQuest);

questRoutes.get('/question', controller.showQuest);

questRoutes.get('/questionasc', controller.showQuestAsc);

questRoutes.get('/questiondesc', controller.showQuestDesc);

questRoutes.get('/answercount', controller.showAnswerDesc);

// questRoutes.get('/answerasc', controller.showAnswerAsc);

questRoutes.patch('/question/:id', validateToken, validateQuest, controller.changeQuest);

questRoutes.delete('/question/:id', validateToken, controller.deleteQuest);

questRoutes.get('/question/:id/answers', validateToken, controller.showAnswer);

questRoutes.post('/question/:id/answers', validateToken, validateAnswer, controller.addAnswer);

module.exports = questRoutes;
