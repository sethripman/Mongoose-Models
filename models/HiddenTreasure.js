const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  hiddenInsideTree: {
    type: Boolean,
    required: true
  },
  guardedByGhosts: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('HiddenTreasure', schema);
