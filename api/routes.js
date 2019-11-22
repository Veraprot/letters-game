const express = require('express');
const router = express.Router({ mergeParams : true });

const {
  postGames,
  gameMove
} = require('../controllers/gamesController')

router.route('/games')
  .post(postGames)
  
router.route('/games/:id')
  .patch(gameMove)
  
const {
  postDictionaries
} = require('../controllers/dictionariesController')

router.post('/dictionaries', postDictionaries)

module.exports = router
