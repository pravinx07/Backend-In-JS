import mongoose from "mongoose";

async function connectDb() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/my-app")
    console.log("Database connected!...");
    
  } catch (error) {
    console.log("DataBase connection failed:",error);
    
  }
}


export default connectDb