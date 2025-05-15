import express from "express"

const app = express()
const PORT = 8002


app.get("/",(req,res)=>{
    res.status(200).json({message:"Server is Running..."})
})


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
    
})