// controllers/userController.js
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");


const generateToken = (user) => {
    const secretKey = process.env.JWT_SECRET || "123456"; // Use an environment variable for the secret
    const token = jwt.sign(
      { id: user._id, email: user.Email }, // Payload
      secretKey,
      { expiresIn: "1h" } // Token expiry (e.g., 1 hour)
    );
  
    return token;
  };


// Signup
exports.signup = async (req, res) => {
  try {
    const { Name, Email, Phone, Password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered." });
    }

    // Save the new user
    const newUser = new User({ Name, Email, Phone, Password });
    await newUser.save();

    res.status(201).json({ message: "Signup successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    // Find the user
    const user = await User.findOne({ Email });
    if (!user || user.Password !== Password) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    res.status(200).json({ message: "Login successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// Get All Users (for testing purposes)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};
