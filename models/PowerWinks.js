const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  numberOfWinks: {
    type: Number,
    required: true,
    min: 1
  },
  emotionalContent: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('PowerWinks', schema);
