import mongoose from "mongoose";

const connectDB = async (mongoUri, dbName) => {
  try {
    const uri = mongoUri || "mongodb+srv://amruthakande0_db_user:2bNmUKwwhRO2XqQk@cluster0.xzvaat5.mongodb.net/fsd_db?retryWrites=true&w=majority";
    await mongoose.connect(uri);
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

export default connectDB;
