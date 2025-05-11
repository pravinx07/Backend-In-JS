import express from 'express'
import urlRoute from "./routes/url.js"
import {connectDB} from './connection.js'
const app = express()
const PORT = 8001
connectDB()

app.get("/",(req,res)=>{
    return res.send("Hey API created")
})
app.use(express.json())
app.use("/url",urlRoute)
app.listen(PORT,()=>{
    console.log(`Server is Running on PORT: ${PORT}`);
    
})