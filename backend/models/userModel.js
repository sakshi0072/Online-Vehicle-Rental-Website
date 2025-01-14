// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Phone: {
    type: String,
    required: true,
    unique: true,
    match: /^\d{10}$/, // Validate phone number format
  },
  Password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
