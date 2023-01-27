import express from "express";
const router = express.Router()
import {predict1,predict2 } from "./ControllerML.js";


router.get("/predict1", predict1)
router.post("/predict2", predict2)

export default router 
