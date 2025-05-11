import mongoose from "mongoose";

export async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/short-url")
    } catch (error) {
        console.log("DataBase Connection Failed!....", error);
        
    }
}