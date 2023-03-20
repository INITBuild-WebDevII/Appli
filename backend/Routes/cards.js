const express = require('express')
const {getAllCards, getOneCard, addCard, deleteCard, updateCard} = require('../Controllers/cardController')
const Application = require('../Models/Cards')
const router = express.Router()
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

router.get('/', getAllCards)

router.get('/:id', getOneCard)

router.post('/', addCard)

router.patch('/', deleteCard)

router.patch('/:id', updateCard)

module.exports = router