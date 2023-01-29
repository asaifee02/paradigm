const mongoose = require("mongoose");

const ShipmentsSchema = new mongoose.Schema({
  Source: String,
  Destination: String,
  TentativePrice:Number,
  FinalPrice:Number,
  SenderID:String,
  receiverID:String,
  approval:Boolean,
  sourceWarehouseID: String,
  destWarehouseID: String,
  products: [{
    name: String,
    quantity: Number,
    volume: Number
  }],
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model("Shipments", ShipmentsSchema);
