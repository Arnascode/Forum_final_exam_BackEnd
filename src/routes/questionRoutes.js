const express = require('express');
const { validateToken } = require('../middleware');

const controller = require('../controllers/questionController');

const questRoutes = express.Router();

questRoutes.post('/question', validateToken, controller.addQuest);

questRoutes.get('/question', controller.showQuest);

questRoutes.patch('/question/:id', validateToken, controller.changeQuest);

questRoutes.delete('/question/:id', validateToken, controller.deleteQuest);

module.exports = questRoutes;
