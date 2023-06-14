const express = require("express");
const {
  loginUser,
  registerUser,
  getUserData,
  look,
} = require("../Controllers/userController");
const router = express.Router();
const { protect } = require("../Middleware/authMiddleware");

//Login Routes
router.post("/login", loginUser);

//Sign Up Routes
router.post("/register", registerUser);

router.get("/me", protect, getUserData);

router.post("/look", look);

module.exports = router;
