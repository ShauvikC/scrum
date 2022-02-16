//create schema (import mongoose)
import Mongoose from 'mongoose';
import "dotenv/config" ;

const connectDB=async ()=>{
    await Mongoose.connect(process.env.MONGO_URI,()=>{
        console.log("MongoDB Connected Successfully")
    })
}

export {connectDB}