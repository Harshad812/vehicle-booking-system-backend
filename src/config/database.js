import mongoose from "mongoose";
import env from "./env.js";

const connectDB = async () => {
  try {
    const mongoURI = env.MONGODB_URL;

    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
