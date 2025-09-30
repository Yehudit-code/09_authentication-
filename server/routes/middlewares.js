const { verifyToken } = require("../utils/token");

// Middleware that protects routes by verifying JWT
function isAuthorized(req, res, next) {
  // Extract "Authorization" header
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  // Expect header format: "Bearer <token>"
  const token = authHeader.split(" ")[1];
  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }

  // Attach decoded payload to request object
  req.user = decoded;
  next();
}

module.exports = { isAuthorized };
