// const Game = require('../models/Game');
// const Tile = require('../models/Tile');
const Board = require('../models/Board');
const fs = require('fs');

exports.initializeBoard = (req, res) => {
  // grabs info from dictionary.json file 
  // initializes game dictionary
  
}

exports.newGame = (req, res) => {
  // initializes a game with dictionary defined in previous method
  // populates tiles with letters from test json file 1 
}

exports.gameMove = (req, res) => {
  // takes user input sent in request 
  // validates against a word in game dictionary 
  // updates the score 
}