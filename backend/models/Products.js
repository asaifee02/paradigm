const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  Name: String,
  Volume: Number,
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model("products", ProductSchema);
