const Users = require('../Models/Users');
const Cards = require('../Models/Cards')
const {signup, login} = require("../Auth/auth")
const bycrypt = require('bcrypt')
const validator  = require('validator')
const jwt = require('jsonwebtoken');


const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET)
}
//Login User
const loginUser  = async (req, res) => {
    const {firstName, lastName, email, password} = req.body
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
    
        const token = createToken(Loguser._id)
        const id = Loguser._id
        res.status(200).json({id, email, token})

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
    const {Username, email, password} = req.body
    try {
        if (!email || !password) {
            throw Error('All fields must be filled')
        }
        console.log(email)
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
    
        const Signuser = await Users.create({Username, email, password: hash})
    
        const token = createToken(Signuser._id)
        const id = Signuser._id
        res.status(200).json({id, email, token})
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

//   const addCards = async(req,res) => {
//     const id = req.body.id
//     const name = req.body.companyName
//     Cards.updateOne(id, {$set: {name: companyName}}, (err, doc) => {
//         if (err) {
//             return console.log(err)
//             res.json(doc)
//         }
//     })
//   }  
}

module.exports = {loginUser, signUp}