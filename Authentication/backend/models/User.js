import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new Schema({
    username:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:[8, "password length must be atleast 8 charecter"]

    }
    
})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next()

    this.password = bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.comaparePassword = function(password){
    return bcrypt.compare(password, this.password)
}

const User = mongoose.model("User", userSchema)

export default User