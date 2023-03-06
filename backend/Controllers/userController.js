const Users = require('../Schema/Users');
const {signup, login} = require("../Auth/auth")
const bycrypt = require('bcrypt')
const validator  = require('validator')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}
//Login User
const loginUser  = async (req, res) => {
    const {email, password} = req.body
    try {
        if (!email || !password) {
            throw Error('All fields must be filled')
        }
    
        const Loguser = await Users.findOne({email})
        
        if (!Loguser) {
            throw Error('Incorrect Email')
        } 
    
        const match = await bycrypt.compare(password, Loguser.password)
    
        if (!match) {
            throw Error('Incorrect Password')
        }
    
        
        res.status(200).json("User Login")
    } catch(error) {
        res.status(400).json({error: error.message})
    }
    // try {
    //     const Loguser = await login(email, password)

    //     //Create Token
    //     const token = createToken(Loguser._id)

    //     res.status(200)
    // } catch(error) {
    //     res.status(400).json({error: error.message})
    // }
    // res.json({mssg: 'User Login'})
}

//Sign Up User
const signUp = async (req, res) => {
    const {email, password} = req.body
    try {
        if (!email || !password) {
            throw Error('All fields must be filled')
        }
        if (!validator.isEmail(email)) {
            throw Error('Email is not valid')
        }
        if (!validator.isStrongPassword(password)) {
            throw Error('Password is not strong enough')
        }
        
        const exists = await Users.findOne({email})
        
    
        if (exists) {
            throw Error('Email already in use')
        } 
    
        const salt = await bycrypt.genSalt(10)
        const hash = await bycrypt.hash(password, salt)
    
        const Signuser = await Users.create({email, password: hash})
    
        
        res.status(200).json("User Login")
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    // try {
    //     const Signuser = await signup(email, password)
    //     //console.log(Signuser)
    //     //Create Token
    //     const token = createToken(Signuser._id)
        
    //     res.status(200)
    // } catch (error) {
    //     res.status(400).json({error: error.message})
    // }
    // res.json({mssg: 'User Created'})
    
}

module.exports = {loginUser, signUp}