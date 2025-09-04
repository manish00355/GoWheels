import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        mongoose.connection.on('connected' , ()=> console.log("Database connnected"))
        await mongoose.connect(`${process.env.MONGODB_URI}/GoWheels`)
    } catch (error) {
        console.log(error.message);
    }
}
export default connectDB;