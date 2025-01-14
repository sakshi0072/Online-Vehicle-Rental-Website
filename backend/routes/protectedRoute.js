const express = require("express");
const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/protected", authenticateToken, (req, res) => {
  res.json({
    message: "Welcome to the protected route!",
    user: req.user, // Contains data from the verified token
  });
});

module.exports = router;
