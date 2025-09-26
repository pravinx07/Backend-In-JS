import jwt from "jsonwebtoken"
import User from "../models/User.js"


const protect = async(req,res,next) => {
    let token = req.headers.authorization;
    if(!token || !token.startsWith("Bearer ")){
      return res.status(409).json({
        message:"Unauthorize "
      })
    }

    try {
      token = token.split(" ")[1]
      const decoded =  jwt.verify(token, process.env.JWT_SECRETE)

      const user = await User.findById(decoded.id).select("-password")
      if(!user){
        return res.status(400).json("User not found")
      }
      req.user = user
      next()
    } catch (error) {
        return res.status(409).json({
            message:"Invalid token"
        })
    }
}
export default protect