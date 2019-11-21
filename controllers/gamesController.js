// const Game = require('../models/Game');
// const Tile = require('../models/Tile');
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

exports.newGame = (req, res) => {
  // initializes a game with dictionary defined in previous method
  // populates tiles with letters from test json file 1 
  let board = new Board({
    dimentions: 4, //hardcoding for this assignment but can be assigned a dynamic value
    users: []
  });
}

exports.gameMove = (req, res) => {
  // takes user input sent in request 
  // validates against a word in game dictionary 
  // updates the score 
}