const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
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

module.exports = User = mongoose.model('games', GameSchema);