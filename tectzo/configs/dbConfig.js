require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const url = process.env.MONGODB_URI;
    await mongoose.connect(url);
    console.log("Successfully connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    process.exit(1);
  }
};

module.exports = connectDB;
