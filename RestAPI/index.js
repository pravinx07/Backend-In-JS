import express from "express"
import data from './MOCK_DATA.json' with { type: "json" };
import fs from 'fs'
import connectDb from './db.js'
import User from './model.js'


const app = express()
const PORT = 8000
app.use(express.urlencoded({extended:false}))
app.use(express.json())

connectDb()
const newUser = new User({ first_name: 'Alice', email:"ajay@gmail.com" });
newUser.save().then(() => console.log('User saved'));

app.get("/users",(req,res)=>{
    const html = `
    <ul>
    ${data.map((t)=> `<li>${t.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html)
})
app.get("/api/users",(req,res)=>{
    res.send(data)
})

app.get("/api/users/:userId",(req,res)=>{
    const userId = Number(req.params.userId)
    const user = data.find((u)=> u.id === userId)
     return res.json(user)
})

app.post("/api/users",(req,res)=>{
    const  body = req.body
    console.log("users", body);
    
    data.push({...body, id:data.length + 1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(data,null,2),(error)=>{
      return res.json({status:"success",id:data.length})
    })

})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}` );
    
})