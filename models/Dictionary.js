const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const DictionarySchema = new Schema({
  words: [String] 
});

module.exports = User = mongoose.model('dictionaries', DictionarySchema);