import Todos from "../models/todo.js";


export const getAllTodos = async(req,res) => {
    const allTodos = await Todos.find()
    res.send(allTodos)
}

export const creatTodos = async(req,res)=>{
    const {title} = req.body
    const newtodo = new Todos({title})
    const saveTods = await newtodo.save()
    res.status(201).json(saveTods)
}


export const updateTodos = async (req,res) => {
     const {id} = req.params
     const updatedTodo = await Todos.findByIdAndUpdate(id,req.body,{new:true})
     res.json(updatedTodo)
}


export const deleteTodos = async (req,res)=>{
    const {id} = req.params
    await Todos.findByIdAndDelete(id)
    res.status(204).send("User Is Deleted")
}