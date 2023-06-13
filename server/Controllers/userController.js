const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");

// Generate JWT
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

//Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw Error("All fields must be filled");
    }

    // Check for user email
    const user = await User.findOne({ email });

    if (!user) {
      throw Error("Incorrect Email");
    }

    // Compare inputted password with hashed user password
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw Error("Incorrect Password");
    }

    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: createToken(user._id),
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Sign Up User
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!email || !password) {
      throw Error("All fields must be filled");
    }

    if (!validator.isEmail(email)) {
      throw Error("Email is not valid");
    }
    if (!validator.isStrongPassword(password)) {
      throw Error("Password is not strong enough");
    }

    // Check if user exists via email
    const userExists = await User.findOne({ email });

    if (userExists) {
      throw Error("Email already in use");
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
      throw Error("Invalid User Data");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserData = async (req, res) => {
  res.json({ message: "User data display" });
};

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
