import {z} from "zod"

export const registerUser = z.object({
    username:z.string().min(3,"Username must be at least 3 character"),
    email:z.string().email("Invalid email format"),
    password:z.string().min(6,"Password must me at least 6 character")
})
