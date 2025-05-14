import express from 'express'
import {handleSignupUser} from "../controller/user.js"

const router = express.Router()

router.post('/',handleSignupUser)

export default router