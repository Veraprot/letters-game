const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const DictionarySchema = new Schema({
  words: [String] 
});

export default mongoose.model('dictionaries', DictionarySchema);