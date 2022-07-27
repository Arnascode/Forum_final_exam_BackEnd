const { updateAnswer, delAnswer } = require('../model/answerModel');

async function changeAnswer(req, res) {
  const { answer } = req.body;
  try {
    const { id } = req.params;
    const updateResult = await updateAnswer(answer, id);
    if (updateResult.affectedRows === 1) {
      res.sendStatus(201);
      return;
    }
    res.status(400).json('Cant change Answer');
  } catch (error) {
    console.log('error in updadting Answer ===', error);
    res.sendStatus(500);
  }
}

async function deleteAnswer(req, res) {
  try {
    const { id } = req.params;
    const delResult = await delAnswer(id);
    if (delResult.affectedRows === 1) {
      res.sendStatus(201);
      return;
    }
    res.status(400).json('Cant delete Answer');
  } catch (error) {
    console.log('error in deleting Answer ===', error);
    res.sendStatus(500);
  }
}

module.exports = {
  changeAnswer,
  deleteAnswer,
};
