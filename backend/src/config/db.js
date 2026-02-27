
import mongoose from "mongoose";

const initializeDatabase = async () => {
  const uri = process.env.MONGO_URI;
  try {
    const conn = await mongoose.connect(uri);
    console.log(`DB ready → ${conn.connection.host}`);
  } catch (err) {
    console.error("DB init failed:", err.message);
    process.exit(1);
  }
};

export default initializeDatabase;
