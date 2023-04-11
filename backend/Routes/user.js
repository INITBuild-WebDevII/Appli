const express = require('express');
const {loginUser, signUp, lookUp, googleSignUp} = require('../Controllers/userController');
const routes = express.Router();
const auth = require('../Auth/google_auth')
const passport = require('passport')
const app = express()
//Login Routes
routes.post('/Login', loginUser);

//Sign Up Routes
routes.post('/signup', signUp);

//Look Up User Route
routes.post('/lookUp', lookUp)

// routes.post('/L', googleSignUp)
module.exports = routes;