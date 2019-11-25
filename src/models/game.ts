const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
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

export default mongoose.model('games', GameSchema);