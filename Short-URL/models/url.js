import mongoose from "mongoose";


const urlScema = new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectUrl:{
        type:String,
        required:true
    },
    visitHistory:[{timestamps:{type:Number}}]
},{timestamps:true})


const Url = mongoose.model("url",urlScema)
export default Url