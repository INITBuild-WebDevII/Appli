const express = require('express');
const {loginUser, signUp} = require('../Controllers/userController');
const routes = express.Router();
const Users = require('../Models/Users');
const requireAuth = require('../middleware/requireAuth')

//Login Routes
routes.post('/Login', loginUser);

//Sign Up Routes
routes.post('/signup', signUp);



routes.get('/', (req, res) => {
    res.json({ msg: "Test" });
})

module.exports = routes;