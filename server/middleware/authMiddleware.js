const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  const { authorization } = req.headers;

  if (authorization && authorization.startsWith("Bearer")) {
    try {
      // Get token from header
      token = authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Set the user from the id thats inside the token, without the password
      req.user = await User.findById(decoded.id).select("-password");

      // Call next piece of middleware
      next();
    } catch (error) {
      console.log(error);

      return res.status(401).json({ error: "Not authorized" });
    }
  }

  // If there's no token at all
  if (!token) {
    return res.status(401).json({ error: "Not authorized, no token" });
  }
});

module.exports = { protect };
