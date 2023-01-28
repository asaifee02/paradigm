const express = require("express");
const warehouse = require("../controllers/warehouseController.js");
const router = express.Router()

//TO GET WAREHOUSE
router.get("/:bid", warehouse.getWarehouse)
//TO CREATE WAREHOUSE
router.post("/", warehouse.createWarehouse)
//TO EDIT WAREHOUSE
router.post("/edit", warehouse.editWarehouse)
router.post("/find", warehouse.findSuitable)
// TO EDIT WAREHOUSE
router.delete("/", warehouse.deleteWarehouse )


module.exports = router 
