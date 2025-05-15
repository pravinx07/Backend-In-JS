import express from "express"
import { connectDb } from "./connection.js"

const app = express()
const PORT = 8002

connectDb()
app.get("/",(req,res)=>{
    res.status(200).json({message:"Server is Running..."})
})


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
    
})