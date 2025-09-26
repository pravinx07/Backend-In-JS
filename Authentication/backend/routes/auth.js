import express from "express"
import  {signUp, login, protectedRoute } from "../controllers/authController.js"
import protect from "../middleware/authMiddleware.js"
const router = express.Router()

router.post("/signup", signUp)
router.post("/login", login)
router.post("/protected",protect, protectedRoute)


export default router