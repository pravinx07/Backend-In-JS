import express from "express"
import dotenv from "dotenv"
import connectDB from "./db.js"
import cors from "cors"
import authUser from "./routes/auth.js"




dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

connectDB()

app.use("/api/auth",authUser)
app.get("/",(req,res)=>{
    res.json({
        message:"Everything is ok"
    })
})


app.listen(PORT, () => {
    console.log("Server is Running on PORT", PORT );
    
})