const express = require('express')
const {getAllCards, getOneCard, addCard, deleteCard, updateCardLoc, updateCard} = require('../Controllers/cardController')
const Application = require('../Models/Cards')
const router = express.Router()
const requireAuth = require('../middleware/requireAuth')

//To check if the user has an authorized token
//Authentication Route
router.use(requireAuth)

//Will retrieve the information of all the cards the user has
//Retreive All user Card Route
router.post('/GET', getAllCards)

//Will retrieve the information of all the cards the user has
router.post('/GETO', getOneCard)

//Will add a card to the user
router.post('/', addCard)

//Will delete the certain card from the user
router.patch('/', deleteCard)

//Will update the card column location
router.patch('/Test', updateCardLoc)

//Will update the information of the card
router.patch('/UP', updateCard)

module.exports = router