const { saveQuest, getQuestDB } = require('../model/questionModel');

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
    res.status(400).json('Cant add account');
  } catch (error) {
    console.log('error in addUserToAcc ===', error);
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
};
