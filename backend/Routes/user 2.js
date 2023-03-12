const express = require('express');
const {loginUser, signUp} = require('../Controllers/userController');
const routes = express.Router();

//Login Routes
routes.post('/Login', loginUser);

//Sign Up Routes
routes.post('/Signup', signUp);

module.exports = routes;