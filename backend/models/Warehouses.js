const mongoose = require("mongoose");

const WarehouseSchema = new mongoose.Schema({
  CurrentVolume: Number,
  Country: String,
  MaxVolume: Number,
  products:[{
    name: String,
    quantity: Number,
    volume: Number
  }],
  BusinessID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "business"
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model("Warehouses", WarehouseSchema);
