const router = require('express').Router()
const passport = require('passport')
const { googleSignUp } = require('../Controllers/userController')
var session = require('express-session');

router.use(session({secret: 'cats'}))
router.use(passport.initialize())
router.use(passport.session())

//auth login
router.get('/login', (req,res) => {
    res.send('login')
})

router.get('/logout', (req,res) => {
    res.send('logout')
})

router.get('/TEST',  passport.authenticate('google', {scope: ['email', 'profile']}))
var util = require('util')
router.get('/google/callback',  passport.authenticate('google'),  (req,res) => {
    console.log(res.ServerResponse)
    res.redirect('/profile/')
})

module.exports = router;