import mongoose from "mongoose";

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("DB CONNECTED ✅"))
    .catch((err) => console.error("Error connecting to DB:", err));
};

export default connectDB;
