import mongoose from "mongoose"
import dotenv from "dotenv"


dotenv.config()

const connectDB = async(): Promise<typeof mongoose> => {
  return await mongoose.connect(<string>process.env.MONGO_URI);
}

export default connectDB