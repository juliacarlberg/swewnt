const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  dateofbirth: {
    type: String,
    required: true,
  },
  birthplace: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  playernumber: {
    type: Number,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  club: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Player", PlayerSchema);
