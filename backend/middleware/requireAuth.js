const jwt = require('jsonwebtoken')
const User = require('../Models/Users')

const requireAuth = (req, res, next) => {

    //verify Authentication
    const {authorization} = req.headers
    console.log(authorization)
    if (!authorization) {
        return res.status(401).json({error: "Authorization token required"})
    }
    
    const token = authorization.split(' ')[1]
    try {
        const {_id} = jwt.verify(token, process.env.SECRET)

        req.user = User.findOne({_id}).select('_id')
        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({error: "Request not authorized"})
    }

}
module.exports = requireAuth