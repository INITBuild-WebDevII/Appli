const router = require('express').Router()

router.get('/', (req,res) => {
    console.log("PROFILE")
    //console.log(res)
    res.redirect('http://localhost:3000/')
})

module.exports = router