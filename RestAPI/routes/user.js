import express from "express"
import {handleGetAllUsers, getUserByID,handleCreateUser,handleUpdateById,handleDeleteUserById} from '../controllers/user.js'

const router = express.Router()

// router.get("/",handleGetUserByHtml)

router.get("/",handleGetAllUsers)

router.get("/:userId",getUserByID)

router.post("/",handleCreateUser)

router.patch("/:userId",handleUpdateById)


router.delete("/:userId",handleDeleteUserById)

export default router