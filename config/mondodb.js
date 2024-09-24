import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongo connected");
  } catch (error) {
    console.log("mongo not connected" + error);
  }
};
export default connectDB;
