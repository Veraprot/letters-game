const fs = require('fs');
const Dictionary = require('../models/Dictionary');

// POST
// Endpoint: /api/dictionaries
// Grabs data from dictionary.json file
// Creates a new dictionary 
exports.postDictionaries = (req, res) => {
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