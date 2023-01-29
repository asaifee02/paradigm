const mongoose = require("mongoose");

const BusinessSchema = new mongoose.Schema({
  name: String,
  email: String,
  warehouses: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "warehouses",
  },
  ShipmentID:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "shipments",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model("business", BusinessSchema);
