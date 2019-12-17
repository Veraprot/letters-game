import Dictionary from '../models/dictionary'
import fs from 'fs'
import path from 'path'
class DictionaryService {
  async get() {
    return await Dictionary.find({}).select('_id')
  }

  async create() {
    let dictionaryData = fs.readFileSync(path.join(__dirname, '../files/dictionary.json'), 'utf8');
    let words = JSON.parse(dictionaryData).words
    let permutationStore = {}

    for(let word of words) {
      let sortedWord = word.split('').sort().join('')

      if(permutationStore[sortedWord]) {
        permutationStore[sortedWord].push(word)
      } else {
        permutationStore[sortedWord] = [word]
      }
    }
    console.log(permutationStore)

    let dictionary = new Dictionary({
      words: permutationStore 
    });
  
    let newDictionary = await dictionary.save()
    return newDictionary
  }
}

export default new DictionaryService()