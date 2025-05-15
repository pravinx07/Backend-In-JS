import express from "express";
import { creatTodos,getAllTodos, updateTodos, deleteTodos } from "../controllers/todo.js";
const router = express.Router()


router.get("/",getAllTodos)
router.post("/",creatTodos)
router.put("/:id",updateTodos)
router.delete("/:id",deleteTodos)


export default router