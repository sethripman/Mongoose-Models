const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  tignomoterRating: {
    type: String,
    required: true
  },
  coporability: {
    type: String,
    required: true
  },
  slugsPresent: {
    type: Boolean,
    required: true
  },
  slugFlavor: {
    type: String,
    required: true
  },
  isSkurb: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Bafmodad', schema);
