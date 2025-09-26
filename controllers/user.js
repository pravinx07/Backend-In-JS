import User from "../models/user.js";

// export  async function handleGetUserByHtml(req,res) {
//      const showUser = await User.find({})
//         const html = `
//         <ul>
//         ${showUser.map((t)=> `<li>${t.first_name} ${t.email} </li>`).join("")}
//         </ul>
//         `
//         res.send(html)
// }

// export async function handleGetAllUsers(req, res) {
//   const showUser = await User.find({});
//   res.send(showUser);
// }

// export async function getUserByID(req, res) {
//   const user = await User.findById(req.params.userId);
//   if (!user) return res.json({ error: "User not found" });
//   return res.json(user);
// }


const registerUser = async(req,res) => {
 const {name, email, password} = req.body
 if(!name || !email || !password){
  return res.status(400).json({
    message:"All fields are required"
  })
 }
}


export default {registerUser}









































// export async function handleCreateUser(req, res) {
//   const body = req.body;

//   if (
//     !body.first_name ||
//     !body.last_name ||
//     !body.email ||
//     !body.gender ||
//     !body.job_title
//   ) {
//     return res.status(400).json({ msg: "All fields are req" });
//   }
//   const user = await User.create({
//     first_name: body.first_name,
//     last_name: body.last_name,
//     email: body.email,
//     gender: body.gender,
//     job_title: body.job_title,
//   });

//   console.log(user);
//   return res.status(201).json({ msg: "User created",id:user._id });
// }


// export async function  handleUpdateById(req,res) {
//     await User.findByIdAndUpdate(req.params.userId,{last_name:"Kumar"})
//         return res.json({msg:"User Updated"})
// }

// export async function  handleDeleteUserById(req,res) {
//     await User.findByIdAndDelete(req.params.userId)
//     return res.json({msg:"success"})
// }

