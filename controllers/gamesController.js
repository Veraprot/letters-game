const fs = require('fs');

const Board = require('../models/Board');
const Dictionary = require('../models/Dictionary');

exports.initializeDictionary = (req, res) => {
  let dictionaryData = fs.readFileSync('./files/dictionary.json');
  let words = JSON.parse(dictionaryData).words;

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
    dimentions: 4, 
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

exports.gameMove = async (req, res) => {
  let rawdata = fs.readFileSync('./files/userInput.json');
  let userInput = JSON.parse(rawdata).selected;
  let board = await Board
                    .findOne()
                    .populate('dictionary', ['words'])

  let userAnswer = parseUserData(userInput, board.tiles)
  let gameResult = compareUserAnswer(board.dictionary.words, userAnswer)
  res.json({mes: gameResult})
}

parseUserData = (userInput, boardTiles) => {
  console.log(boardTiles)
  console.log(userInput[0].row)
  permutation = boardTiles[userInput[0].row][userInput[0].column]
  for(let i = 0; i < userInput.length - 1; i++) {
    if(checkNeighbors(userInput[i], userInput[i + 1])) {
      permutation += boardTiles[userInput[i + 1].row][userInput[i + 1].column]
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