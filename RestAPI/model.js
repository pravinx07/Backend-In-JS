import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
 first_name:{
    type:String,
    required:true
 },
 last_name:{
    type:String
 },
 email:{
    type:String,
    required:true,
    unique:true
 },
 gender:{
    type:String,

 },
 job_title:{
   type:String
 }
})

const User = mongoose.model("user",userSchema)

export default User