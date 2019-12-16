import Dictionary from '../models/dictionary'
import DictionaryStore from '../models/dictionaryStore'
import fs from 'fs'
import path from 'path'
class DictionaryService {
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

    let dictionaryStore = new DictionaryStore({
      words: permutationStore 
    });
  
    let newDictionaryStore = await dictionaryStore.save()
    console.log(newDictionaryStore)
  }
}

export default new DictionaryService()