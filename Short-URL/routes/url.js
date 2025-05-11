import express from 'express'
import { handleGetAnalytics, handleGetUrl } from '../controller/url.js'


const router = express.Router()

router.post("/",handleGetUrl)
router.get("/analytics/:shortId",handleGetAnalytics)

export default router
