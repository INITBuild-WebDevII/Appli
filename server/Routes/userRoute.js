const express = require("express");
const { loginUser, signUp, look } = require("../Controllers/userController");
const router = express.Router();

//Login Routes
router.post("/login", loginUser);

//Sign Up Routes
router.post("/signup", signUp);

router.post("/look", look);

module.exports = router;