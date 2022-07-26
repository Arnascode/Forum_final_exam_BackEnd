/* eslint-disable object-curly-newline */
const { saveQuest, getQuestDB, updateQuest, delQuest } = require('../model/questionModel');

async function addQuest(req, res) {
  const { title, content } = req.body;
  //  , user_id
  const idfromToken = req.userId;
  try {
    const saveResult = await saveQuest(title, content, idfromToken);
    if (saveResult.affectedRows === 1) {
      res.sendStatus(201);
      return;
    }
    res.status(400).json('Cant add quest');
  } catch (error) {
    console.log('error in Quest ===', error);
    res.sendStatus(500);
  }
}
async function changeQuest(req, res) {
  const { title, content } = req.body;
  try {
    const { id } = req.params;
    const updateResult = await updateQuest(title, content, id);
    if (updateResult.affectedRows === 1) {
      res.sendStatus(201);
      return;
    }
    res.status(400).json('Cant change quest');
  } catch (error) {
    console.log('error in updadting quest ===', error);
    res.sendStatus(500);
  }
}

async function deleteQuest(req, res) {
  try {
    const { id } = req.params;
    const delResult = await delQuest(id);
    if (delResult.affectedRows === 1) {
      res.sendStatus(201);
      return;
    }
    res.status(400).json('Cant delete quest');
  } catch (error) {
    console.log('error in deleting quest ===', error);
    res.sendStatus(500);
  }
}

async function showQuest(req, res) {
  try {
    const artArr = await getQuestDB();
    res.json(artArr);
  } catch (error) {
    console.log('questRoutes error ===', error);
    res.sendStatus(500);
  }
}

module.exports = {
  addQuest,
  showQuest,
  changeQuest,
  deleteQuest,
};
