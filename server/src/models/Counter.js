const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  knownCount: { type: Number, default: 0 },
  unknownCount: { type: Number, default: 0 },
});

module.exports = mongoose.model("Counter", counterSchema);