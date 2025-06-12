import mongoose from 'mongoose';

export async function connectDB() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}
