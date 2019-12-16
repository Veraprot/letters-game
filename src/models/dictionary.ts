const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const DictionarySchema = new Schema({
  words: {
    type: Map,
    of: String
  }
});

export default mongoose.model('dictionaries', DictionarySchema);