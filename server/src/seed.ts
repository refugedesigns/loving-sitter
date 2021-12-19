import mongoose from "mongoose"
import connectDB from "./db/db"
import dotenv from "dotenv"

dotenv.config()

async function seed() {
  try {
    await mongoose.connect(<string>process.env.MONGO_URI);

    await mongoose.connection.db.dropDatabase();

  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await mongoose.disconnect();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  seed();
}