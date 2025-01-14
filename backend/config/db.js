// db.js
const mongoose = require("mongoose");

const connection_url =
  "mongodb+srv://xyz:root@xyz.163cd.mongodb.net/rentkar?retryWrites=true&w=majority&appName=xyz";

const connectDB = async () => {
  try {
    await mongoose.connect(connection_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection established successfully.");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
