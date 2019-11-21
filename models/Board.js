const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BoardSchema = new Schema({
  dimentions: Number, 
  tiles: [[ 
    {
      type: String,
      required: true,
      max: 1
    }
  ]], 

  dictionary: {
    type: Schema.Types.ObjectId,
    ref: 'dictionaries'
  }
});

module.exports = User = mongoose.model('boards', BoardSchema);