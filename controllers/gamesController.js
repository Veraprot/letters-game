const fs = require('fs');

const Game = require('../models/Game');
const Dictionary = require('../models/Dictionary');

// POST
// Endpoint: /api/games
// required body: {
//   dictionary_id: ObjectId(dictionary)  => id of a dictionary that the game belongs to 
// }
// Creates a new dictionary 
exports.postGames = async (req, res) => {
  const {dictionary_id} = req.body

  let game = new Game({
    dimentions: 4, //hardcoded for now, but can be refactored to be dynamic and grab dimentions set my user through request body
    tiles: buildGameTiles(4),
    dictionary: dictionary_id
  });

  game.save()
    .then(game => {
      res.json(game)
    })
    .catch(err => {
      res.json(err)
    })
}

// PATCH
// Endpoint: /api/games/:id
// required body: {
//   selected: [] => array of objects with row and column of selected letter
// }
exports.gameMove = async (req, res) => {
  const {id} = req.params
  const {selected} = req.body

  // get game by id 
  let game = await Game
                    .findById(id)
                    .populate('dictionary', ['words'])

  // returns a string that matches user input 
  let userAnswer = parseUserData(selected, game.tiles)

  // compares userAnswer and words in dictionary
  let gameResult = compareUserAnswer(game.dictionary.words, userAnswer)
  res.json({mes: gameResult})
}

// HELPER METHODS(will move somewhere else probably)

//  checks user input against game board and words in dictionary and return word from dictionary that matches 
parseUserData = (userInput, gameTiles) => {

  // checkes letter in the board with row/column position 
  // adds it to the string 
  permutation = gameTiles[userInput[0].row][userInput[0].column]
  for(let i = 0; i < userInput.length - 1; i++) {

    // checks if user input letters are concecutive/neightbors(are right next to each other on the board. If not then User input is incorrect and i have to write logic for edge cases )
    if(checkNeighbors(userInput[i], userInput[i + 1])) {
      permutation += gameTiles[userInput[i + 1].row][userInput[i + 1].column]
    }
  }
  return permutation.split('').sort().join('')
}

checkNeighbors = (currentInput, nextInput) => {
  return ( 
    -1 <= currentInput.row - nextInput.row <= 1 &&
    -1 <= currentInput.column - nextInput.column <= 1
  )
}

// Takes in alphabetically sorted userAnswer string and 
// checks whether it is equal to a permutation of a sorted string in dictionary
compareUserAnswer = (dictionary, userResult) => {
  for(let i = 0; i < dictionary.length; i++) {
    if(dictionary[i].length == userResult.length) {
      let sortedWord = dictionary[i].split('').sort().join('')
      if(sortedWord == userResult.toLowerCase()) {
        return dictionary[i]
      }
    }
  }
}

// takes in an array of letters from test-board-1.json file
// creates a 2-dimentional array that holds game board letters and their position on the board
// Example: 
//  letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
//  output: [
//          ['a', 'b', 'c', 'd'],
//          ['e', 'f', 'g', 'h']
//          ]
buildGameTiles = (boardSize) => {
  let boardData = fs.readFileSync('./files/test-board-1.json');
  let letters = JSON.parse(boardData).board;

  gameTiles = []
  for(let i = 0; i < boardSize; i++) {
    let row = []

    for(let k = 0; k < boardSize; k++) {
      row.push(letters[i*boardSize + k]);
    }

    gameTiles.push(row)
  }

  return gameTiles
}