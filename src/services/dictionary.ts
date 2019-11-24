import Dictionary from '../models/dictionary'
import fs from 'fs'
import path from 'path'
class DictionaryService {
  async create() {
    let dictionaryData = fs.readFileSync(path.join(__dirname, '../files/dictionary.json'), 'utf8');
    let words = JSON.parse(dictionaryData).words
    let dictionary = new Dictionary({
      words: words, 
    });
  
    let newDictionary = await dictionary.save()
    return newDictionary
  }
}

export default new DictionaryService()