const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  badnessRating: {
    type: Number,
    required: true
  },
  similarTo: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('TerribleFlavor', schema);
