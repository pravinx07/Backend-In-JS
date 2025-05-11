import express from 'express'
import { handleGetUrl } from '../controller/url.js'


const router = express.Router()

router.post("/",handleGetUrl)

export default router
