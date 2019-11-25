import fs from 'fs'
import path from 'path'
import Game from '../models/game'

class GameService {
  async create(dictionaryId, gameTiles) {
    let game = new Game({
      tiles: gameTiles,
      dictionary: dictionaryId
    });
  
    let newGame = await game.save()
    return newGame
  }

  async findGameById(gameId) {
    let game = await Game
    .findById(gameId)
    .populate('dictionary', ['words'])

    return game
  }

  buildGameTiles(boardSize) {
    let boardData = fs.readFileSync(path.join(__dirname, '../files/test-board-1.json'), 'utf8');
    let letters = JSON.parse(boardData).board;
  
    let gameTiles = []
    for(let i = 0; i < boardSize; i++) {
      let row = []
  
      for(let k = 0; k < boardSize; k++) {
        row.push(letters[i*boardSize + k]);
      }
  
      gameTiles.push(row)
    }
  
    return gameTiles
  }

  parseUserData = (userInput, gameTiles) => {
    if(userInput.length >= 3) {
      let permutation = gameTiles[userInput[0].row][userInput[0].column]
      for(let i = 0; i < userInput.length - 1; i++) {
        if(this.checkNeighbors(userInput[i], userInput[i + 1])) {
          permutation += gameTiles[userInput[i + 1].row][userInput[i + 1].column]
        }
      }
      return permutation.split('').sort().join('')
    }
  }

  checkNeighbors(currentInput, nextInput) {
    return ( 
      -1 <= currentInput.row - nextInput.row &&
      currentInput.row - nextInput.row <= 1 &&
      -1 <= currentInput.column - nextInput.column &&
      currentInput.column - nextInput.column <= 1
    )
  }

  compareUserAnswer(dictionary, userResult) {
    for(let i = 0; i < dictionary.length; i++) {
      if(dictionary[i].length == userResult.length) {
        let sortedWord = dictionary[i].split('').sort().join('')
        if(sortedWord.toLowerCase() == userResult.toLowerCase()) {
          return dictionary[i]
        }
      }
    }

    return "No word in dictionary matches selection"
  }
}

export default new GameService()