import express from "express";
const router = express.Router()
import {predict2 } from "./ControllerML.js";


// router.get("/predict1", predict1)
router.post("/predict", predict2)

export default router 
