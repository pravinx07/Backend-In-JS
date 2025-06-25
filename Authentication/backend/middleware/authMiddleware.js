import jwt from "jsonwebtoken"
import User from "../models/User.js"


const protect = async(req,res,next) => {
    const token = req.headers.authorization;
    if(!token || !token.startsWith("Bearer ")){
      return res.status(409).json({
        message:"Unauthorize "
      })
    }

    try {
      token = token.split(" ")[1]
      const decoded =  jwt.verify(token, process.env.JWT_SECRETE)
      req.body = await User.find(decoded.id).select("-password")

      next()
    } catch (error) {
        return res.status(409).json({
            message:"Invalid token"
        })
    }
}
export default protect