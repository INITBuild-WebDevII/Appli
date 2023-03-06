const Users = require("../Schema/Users")
const bycrypt = require('bcrypt')
const validator  = require('validator')
const { use } = require("../Routes/user")
//Static SignUp Method
const signup = async (email, password) => {
    //validation
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
    
        return Signuser
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    
}

//Static login method
const login = async function (email, password) {
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

    return Loguser
}
module.exports = {signup, login}
