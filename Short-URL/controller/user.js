import User from '../models/user.js'

export async function handleSignupUser(req,res){
 const {name, password,email} = req.body
 await User.create({
    name,
    email,
    password
 })
 res.render("home")
}