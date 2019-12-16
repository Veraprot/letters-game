const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const DictionaryStoreSchema = new Schema({
  words: {
    type: Map,
    of: String
  }
});

export default mongoose.model('dictionaryStores', DictionaryStoreSchema);