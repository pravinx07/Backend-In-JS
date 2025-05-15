import mongoose from "mongoose"


export const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/my-todo")
        console.log("DataBase Connected!...");
        
    } catch (error) {
        console.log("Database Connection failed!....");
        
    }
}