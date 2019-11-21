const express = require('express');
const router = express.Router({ mergeParams : true });

const {
  initializeBoard,
  newGame,
  gameMove
} = require('../controllers/gamesController')

module.exports = router
