const express = require("express");
const router = express.Router();

const questionRouter = require("./Question");
const answerRouter = require("./Answer");
const businessRouter = require("./Business");
const warehouseRoutes =  require("./Warehouse.js")
const ProductsWarehouseRoutes =  require("./Products.js")
const shipmentsRoutes =  require("./Shipments.js")
// const warehouse=require("./Warehouse");
router.get("/", (req, res) => {
  res.send("This api is reserved ");
});

router.use("/questions", questionRouter);
router.use("/answers", answerRouter);
router.use("/business", businessRouter)
router.use("/warehouses", warehouseRoutes);
router.use("/products", ProductsWarehouseRoutes);
router.use("/shipments", shipmentsRoutes);

// router.use("/warehouse", warehouse);
module.exports = router;
