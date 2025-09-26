import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/auth.route.js"

const app = express()
dotenv.config();
const PORT = process.env.PORT || 4000

app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.get("/", (req,res) => {
    res.status(200).json({
        success:true,
        message:"All is OKK"
    })
})

app.use("/api/v1/users", userRouter)

app.listen(PORT , () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
})