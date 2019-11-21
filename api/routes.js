const express = require('express');
const router = express.Router({ mergeParams : true });

const {
  initializeDictionary,
  newGame,
  gameMove
} = require('../controllers/gamesController')


router.route('/games')
  .get(initializeDictionary)
  .post(newGame)
  .patch(gameMove)


module.exports = router
