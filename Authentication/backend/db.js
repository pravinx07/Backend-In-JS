import mongoose from "mongoose"




const connectDB = async() => {
    try {
        console.log("Databse URL",process.env.MONGODB_URL);
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connection successfull.");
        
        
    } catch (error) {
        console.log("Database connection failed!", error);
        
    }
}

export default connectDB