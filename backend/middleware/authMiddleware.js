const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  // Get the token from the request header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Authorization: "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: "Access Denied: No Token Provided" });
  }

  try {
    // Verify the token
    const secretKey = process.env.JWT_SECRET || "your_jwt_secret"; // Use an environment variable for the secret
    const verified = jwt.verify(token, secretKey);

    // Attach user data to request object
    req.user = verified;
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(403).json({ message: "Invalid or Expired Token" });
  }
};

module.exports = authenticateToken;
