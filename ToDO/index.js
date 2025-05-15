import express from "express"
import { connectDb } from "./connection.js"
import todoRoutes from "./routes/todo.js"
import cors from 'cors'

const app = express()
const PORT = 8002

app.use(express.json())
connectDb()
app.use(cors())

app.use('/api/todos', todoRoutes);
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
    
})