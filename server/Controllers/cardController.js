const { default: mongoose } = require('mongoose')
const Cards = require('../Models/Cards')
const Users = require('../Models/userModel')

//get All workout
const getAllCards = async(req, res) => {
    const {user_ID} = req.body

    const getCards = await Cards.find({user_ID: user_ID})
    
    res.status(200).json(getCards)
}
//get Single Workout
//Ignore
const getOneCard = async (req, res) => {
    const {user_ID, cardID} = req.body
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({error: "No Card Exists"})
    // }
    const oneCard = await Cards.find({cardID: cardID})

    // if (!oneCard) {
    //     return res.status(404).json({error: "No Card Exists"})
    // }
    res.status(200).json(oneCard)
}

//Create New Workout
const addCard = async(req, res) => {
    const {companyName, positionTitle, user_ID, columnLocation, cardID, applicationLink, dateApplied, dueDate, responseDate, Notes} = req.body
try {
    const Add_Card = await Cards.create({companyName, positionTitle, user_ID, columnLocation, cardID, applicationLink, dateApplied, dueDate, responseDate, Notes}) 
    
    const add_Card_User = await Users.findByIdAndUpdate(user_ID, {$push: {appliedCards: Add_Card}})
    
    if (add_Card_User == null) {
        const add_Card_User = await Users.findByIdAndUpdate(user_ID, {$set: {appliedCards: Add_Card}})
    }
    const id = Add_Card.id
    res.status(200).json({Add_Card, id})
}catch (error) {
    res.status(400).json({error: error.message})
}

}

//Delete a Workout
const deleteCard = async (req, res) => {
    const ID = req.body.cardID;
    // if (!mongoose.Types.ObjectId.isValid(cardID)) {
    //     return res.status(404).json({error: "No Card Exists"})
    // }
    
    const Delete = await Users.updateMany({"appliedCards.cardID": ID}, {$pull: {appliedCards: {cardID: ID}}})
    const Delete_Card = await Cards.findOneAndDelete({cardID: ID})
    if (!Delete) {
        return res.status(404).json({error: "No Card Exists"})
    }
    res.status(200).json(Delete)
}

//Update Workout
const updateCardLoc = async (req, res) => {
    //const {id} = req.params
    const {columnLocation, index, id} = req.body
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({error: "No Card Exists"})
    // }

    const upDate_Cards = await Cards.findOneAndUpdate({cardID: id}, {
        ...req.body
    })

    const upDate = await Users.updateOne({"appliedCards.cardID": id}, {$set: {"appliedCards.$.columnLocation": columnLocation}})

    res.status(200).json({upDate})
}
const updateCard = async (req, res) => {
    const {companyName, positionTitle, applicationLink, dateApplied, responseDate, dueDate, Notes, cardID} = req.body
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({error: "No Card Exists"})
    // }
    console.log(companyName + "TEST")
    const upDate_Cards = await Cards.findOneAndUpdate({cardID: cardID}, {
        companyName: companyName, positionTitle: positionTitle, applicationLink: applicationLink, dateApplied: dateApplied, responseDate: responseDate, 
        dueDate: dueDate, Notes: Notes
    })
    
    //const upDate = await Users.updateOne({"appliedCards.cardID": id}, {$set: {"appliedCards.$.columnLocation": columnLocation}})

    res.status(200).json({upDate_Cards})
}


module.exports = {getAllCards, getOneCard, addCard, deleteCard, updateCardLoc, updateCard}