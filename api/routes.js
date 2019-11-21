const express = require('express');
const router = express.Router({ mergeParams : true });

const {
  initializeBoard,
  newGame,
  gameMove
} = require('../controllers/gamesController')


router.route('/games')
  .get(initializeBoard)
  .post(newGame)
  .patch(gameMove)

  
module.exports = router
