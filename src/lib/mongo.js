import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const conn = await mongoose.connect(String(process.env.MONGODB_URL));
    return conn;
  } catch (error) {
    throw new Error(error);
  }
}
