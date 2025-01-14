// routes/userRoutes.js
const express = require("express");
const { signup, login, getAllUsers } = require("../controllers/userController");
const router = express.Router();

// Signup route
router.post("/add", signup);

// Login route
router.post("/login", login);

// Get all users (for testing)
router.get("/all", getAllUsers);

module.exports = router;
