import express from 'express'
import { nanoid } from 'nanoid'
import Url from "../models/url.js"


export async function handleGetUrl(req,res){
    const body = req.body
    
    if(!body.url) return res.status(400).json({error:"Url Required"})
    const shortId = nanoid(8)
    await Url.create({
      shortId:shortId,
      redirectUrl:body.url,
      visitedHistory:[]
    })
    return res.json({id:shortId})
}
