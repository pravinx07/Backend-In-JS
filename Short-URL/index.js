import express from 'express'
import urlRoute from "./routes/url.js"
import {connectDB} from './connection.js'
import Url from "./models/url.js"
import userRouter from "./routes/user.js"
const app = express()
const PORT = 8001
connectDB()

app.get("/",(req,res)=>{
    return res.send("Hey API created")
})
app.use(express.json())
app.use("/url",urlRoute)
app.use("/user",userRouter)
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('./views');
});
app.get('/:shortId',async(req,res)=>{
    const shortId = req.params.shortId
    const entry = await Url.findOneAndUpdate({
       shortId
    },{

        $push:{
            visitHistory:{
                timestamps:Date.now()
            }
        }
    })
    console.log(Url,entry);
    
})
app.listen(PORT,()=>{
    console.log(`Server is Running on PORT: ${PORT}`);
    
})