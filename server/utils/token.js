const jwt = require("jsonwebtoken");

// Secret key for signing JWTs. In production, always store it in .env file.
const JWT_SECRET = process.env.JWT_SECRET || "mySecretKey";

// Function to generate a signed JWT with a 1h expiration
function generateToken(username) {

    const payload = { name: username };

  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
}

// Function to verify a token's validity
function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null; // Returns null if token is invalid or expired
  }
}

module.exports = { generateToken, verifyToken };