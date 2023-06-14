const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");

// Generate JWT
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

//Login User
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "All fields must be filled" });
  }

  // Check for user email
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ error: "Incorrect Email" });
  }

  // Compare inputted password with hashed user password
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(400).json({ error: "Incorrect Password" });
  }

  res.status(200).json({
    _id: user.id,
    name: user.name,
    email: user.email,
    token: createToken(user._id),
  });
});

//Sign Up User
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "All fields must be filled" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Email is not valid" });
  }
  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({ error: "Password is not strong enough" });
  }

  // Check if user exists via email
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ error: "Email already in use" });
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({ name, email, password: hashedPassword });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: createToken(user._id),
    });
  } else {
    return res.status(400).json({ error: "Invalid User Data" });
  }
});

const getUserData = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);

  res.status(200).json({ id: _id, name, email });
});

const look = async (req, res) => {
  const { Uid } = req.body;
  try {
    const user = await User.findById(Uid);

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, registerUser, getUserData, look };
