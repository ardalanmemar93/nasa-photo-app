const mongoose = require('mongoose');

const apodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  explanation: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Apod = mongoose.model('Apod', apodSchema);

module.exports = Apod;
