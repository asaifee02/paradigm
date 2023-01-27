import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routesML.js"



const app=express();
dotenv.config();



app.use(express.json())


app.use("/api/ml",userRoutes)


app.use((err,req,res,next)=>{
    const status = err.status|| 500
    const message = err.message|| " something went wrong IDK"
    return res.status(status).json({
        success:false,
        status:status,
        message:message
    })
})

app.listen(8800, ()=>{
    
    console.log('server running !! ')})