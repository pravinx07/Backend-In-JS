import { validate } from "../middleware/validate.js";
import express from "express"
import { registerUser } from "../validators/auth.validator.js";


const router = express.Router()

router.post("/register",validate(registerUser),(req,res)=>{
    res.json({
        success:true,
        message:"user validate & ready to register"
    })
})

export default router