const express = require('express')
const {getAllCards, getOneCard, addCard, deleteCard, updateCardLoc, updateCard} = require('../Controllers/cardController')
const Application = require('../Models/Cards')
const router = express.Router()
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

router.post('/GET', getAllCards)

router.get('/:id', getOneCard)

router.post('/', addCard)

router.patch('/', deleteCard)

router.patch('/Test', updateCardLoc)

router.patch('/UP', updateCard)

module.exports = router