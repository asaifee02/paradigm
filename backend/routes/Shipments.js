const express = require("express");
const shipment = require("../controllers/ShipmentController.js");
const router = express.Router()

//TO GET ALL Shipment
router.get("/", shipment.getAllShipment)
//TO GET ALL Shipment from particular business
router.get("/:email", shipment.getAllShipmentBusiness)
//TO CREATE Shipment
router.post("/", shipment.createShipment)
//TO EDIT Shipment BY ADMIN
router.post("/admin/:shipmentID", shipment.editShipmentAdmin)
//TO EDIT Shipment BY Business
router.post("/:shipmentID", shipment.editShipmentbusiness)
// TO delete Shipment
router.delete("/:shipmentID", shipment.deleteShipmentbusiness)


module.exports = router 
