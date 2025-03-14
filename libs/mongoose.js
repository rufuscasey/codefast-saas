import mongoose from "mongoose";
import User from "@/models/User";
import Board from "@/models/Board";

const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (e) {
        console.error("MongoDB connection failed: " + e.message);
    }
};

export default connectMongo;
    