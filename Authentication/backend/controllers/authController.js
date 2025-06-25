import User from "../models/User.js"
import jwt from "jsonwebtoken"

const generateToken = (user) => {
    return jwt.sign({id:user._id}, process.env.JWT_SECRETE,{
    expiresIn: process.env.JWT_EXPIRES_IN
    })
}


export const signUp = async (req, res) => {
    const {username, email, password} = req.body

   try {
    if(!username || !email || !password){
     res.status(400).json({
         message:"All fields are required"
     })
    }
 
     const existUser = await User.findOne({email});
 
     if(existUser){
         return res.status(409).json({
             message:"Email already taken enter new Email"
         })
         
     }
     
     const user = await User.create({username, email, password})
     const token = generateToken(user)
 
     res.status(200).json({
        token:token,
         message:"User created successfully"
     })
 
   } catch (error) {
      res.status(500).json({
        message:`Server error`, error:error.message
      })
   }

}



export const login = async(req,res) => {
    const {email, password}  = req.body
    try {
        if(!email || !password){
            res.status(400).json({
                message:"all fields are required"
            })
        }
        const user = await User.findOne({email})

        if(!email){
            res.status(400).json({
                message:"Invalid email or password"
            })
        }

        const isMatch = user.comaparePassword(password)

        if(!isMatch){
            res.status(400).json({
                message:"Invalid email or password"
            })
        }

        const token = generateToken(user)

        return res.status(200).json({
            token:token,
            message:"User login successfully"
        })
        
    } catch (error) {
        return res.status(400).json({message: "Login failed! ..", error:error.message})
    }
}