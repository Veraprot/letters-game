const fs = require('fs');

let rawdata = fs.readFileSync('./files/test-board-1.json');
let letters = JSON.parse(rawdata).board;

let dictionaryData = fs.readFileSync('./files/dictionary.json');
let dictWords = JSON.parse(dictionaryData).words;

function buildBoard() {
  var data = {
    board: [],
  };

  boardSize = 4;

  for (var i = 0; i < boardSize; i += 1) {
    var row = [];

    for (var k = 0; k < boardSize; k += 1) {
      row.push(letters[i*boardSize + k]);
    }

    data.board.push(row);
  }

  return data.board
}

let board = buildBoard()

let userInputData = fs.readFileSync('./files/userInput.json');
let userInput = JSON.parse(userInputData).selected;

const parseUserData = () => {
  console.log(board)

  userInput.forEach(input => {
    let {row, column} = input
    console.log(row, column)
    console.log(board[row][column])
  });
}

parseUserData()