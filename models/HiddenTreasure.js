const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  fights: {
    type: Number,
    required: true
  },
  style: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('NakMuay', schema);
