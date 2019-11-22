// const fs = require('fs');

// let rawdata = fs.readFileSync('./files/test-board-1.json');
// let letters = JSON.parse(rawdata).board;

// let dictionaryData = fs.readFileSync('./files/dictionary.json');
// let dictWords = JSON.parse(dictionaryData).words;

// function buildBoard() {
//   var data = {
//     board: [],
//   };

//   boardSize = 4;

//   for (var i = 0; i < boardSize; i += 1) {
//     var row = [];

//     for (var k = 0; k < boardSize; k += 1) {
//       row.push(letters[i*boardSize + k]);
//     }

//     data.board.push(row);
//   }

//   return data.board
// }

// let board = buildBoard()

// let userInputData = fs.readFileSync('./files/userInput.json');
// let userInput = JSON.parse(userInputData).selected;

// const checkNeighbors = (currentInput, nextInput) => {
//   return ( 
//     -1 <= currentInput.row - nextInput.row <= 1 &&
//     -1 <= currentInput.column - nextInput.column <= 1
//   )
// }

// const parseUserData = () => {
//   console.log(board)
//   permutation = board[userInput[0].row][userInput[0].column]
//   for(let i = 0; i < userInput.length - 1; i++) {
//     if(checkNeighbors(userInput[i], userInput[i + 1])) {
//       permutation += board[userInput[i + 1].row][userInput[i + 1].column]
//     }
//   }
//   // alphabetically sort user input
//   return permutation.split('').sort().join('')
// }

// const userResult = parseUserData()

// const compareUserAnswer = () => {
//   for(let i = 0; i < dictWords.length; i++) {
//     if(dictWords[i].length == userResult.length) {
//       let sortedWord = dictWords[i].split('').sort().join('')
//       if(sortedWord == userResult.toLowerCase()) {
//         return dictWords[i]
//       }
//     }
//   }
// }

// console.log(compareUserAnswer())
