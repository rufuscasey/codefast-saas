import mongoose from "mongoose";

const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (e) {
        console.error("MongoDB connection failed: " + e.message);
    }
};

export default connectMongo;
    