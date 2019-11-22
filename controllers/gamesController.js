// const Game = require('../models/Game');
// const Tile = require('../models/Tile');
const ObjectId = mongoose.Types.ObjectId;

const Board = require('../models/Board');
const Dictionary = require('../models/Dictionary');

const fs = require('fs');

// buggy because each time this endpoint is being hit a new document is being created
// create only if not exist
exports.initializeDictionary = (req, res) => {
  // grabs info and parses json data from dictionary.json file 
  let dictionaryData = fs.readFileSync('./files/dictionary.json');
  let words = JSON.parse(dictionaryData).words;

  // initializes game dictionary
  let dictionary = new Dictionary({
    words: words, 
  });

  dictionary.save()
    .then(dictionary => {
      res.json(dictionary)
    })
    .catch(err => res.json(err))
}

exports.newGame = async (req, res) => {
  let dict = await Dictionary.findOne()
  let board = new Board({
    dimentions: 4, //hardcoding for this assignment but can be assigned a dynamic value
    tiles: buildBoardTiles(4),
    dictionary: dict
  });

  board.save()
    .then(board => {
      res.json(board)
    })
    .catch(err => {
      res.json(err)
    })
}

buildBoardTiles = (boardSize) => {
  let rawdata = fs.readFileSync('./files/test-board-1.json');
  let letters = JSON.parse(rawdata).board;

  boardTiles = []
  for(let i = 0; i < boardSize; i++) {
    let row = []

    for(let k = 0; k < boardSize; k++) {
      row.push(letters[i*boardSize + k]);
    }

    boardTiles.push(row)
  }

  return boardTiles
}

exports.gameMove = (req, res) => {
  // takes user input sent in request 
  // validates against a word in game dictionary 
  // updates the score 
}