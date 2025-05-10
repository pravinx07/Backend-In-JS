import express from "express"
import User from '../models/user'

const router = express.Router()

router.get("/",async(req,res)=>{
    const showUser = await User.find({})
    const html = `
    <ul>
    ${showUser.map((t)=> `<li>${t.first_name} ${t.email} </li>`).join("")}
    </ul>
    `
    res.send(html)
})
router.get("/",async(req,res)=>{
    const showUser = await User.find({})
   res.send(showUser)
})

router.get("/:userId",async(req,res)=>{
   const user = await User.findById(req.params.userId)
   if(!user) return res.json({error:"User not found"})
     return res.json(user)
})

router.post("/",async(req,res)=>{
    const  body = req.body
   
    
    if(!body.first_name |body.last_name |body.email |body.gender |body.job_title){
        return res.status(400).json({msg:"All fields are req"})
    }
      const user = await User.create({
            first_name:body.first_name,
            last_name:body.last_name,
            email:body.email,
            gender:body.gender,
            job_title:body.job_title

        })

        console.log(user);
        return res.status(201).json({msg:"User created"})
        
    

})

router.patch("/:userId",async(req,res)=>{
    const user = User.findByIdAndUpdate(req.params.userId,{last_name:"Kumar"})
    return res.json({msg:"User Updated"})
})

module.exports = router