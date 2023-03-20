const { default: mongoose } = require('mongoose')
const Cards = require('../Models/Cards')
const Users = require('../Models/Users')

//get All workout
const getAllCards = async(req, res) => {
    // const IDS = "6414af0f9b1e2a1d9500e83b";
    // const allCards = await Users.findById(IDS, 'appliedCards')

    // res.status(200).json(allCards)
    // const cards= await Users.findOne({_id:req.body._id}, 'appliedCards');
    
    // res.json(cards.appliedCards)
}
//get Single Workout
//Ignore
const getOneCard = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No Card Exists"})
    }
    const oneCard = await Cards.findById(id)

    if (!oneCard) {
        return res.status(404).json({error: "No Card Exists"})
    }
    res.status(200).json(oneCard)
}

//Create New Workout
const addCard = async(req, res) => {
    const {companyName, ID} = req.body
try {

    const Add = await Cards.create({companyName, ID}) 
    
    const addP = await Users.findByIdAndUpdate(ID, {$push: {appliedCards: Add}})
    console.log(addP)
    if (addP == null) {
        const addP = await Users.findByIdAndUpdate(ID, {$set: {appliedCards: Add}})
    }
    
    
    res.status(200).json(Add)
}catch (error) {
    res.status(400).json({error: error.message})
}

}

//Delete a Workout
const deleteCard = async (req, res) => {
    const id = req.body.userID
    const companyName = req.body.companyName;
    // if (!mongoose.Types.ObjectId.isValid(cardID)) {
    //     return res.status(404).json({error: "No Card Exists"})
    // }

    const del =  await Users.updateOne({_id:id}, {$pull: {"appliedCards" :{companyName: companyName}}})
    
    if (!del) {
        return res.status(404).json({error: "No Card Exists"})
    }
    res.status(200).json(del)
}

//Update Workout
const updateCard = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No Card Exists"})
    }

    const upDate = await Cards.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!upDate) {
        return res.status(404).json({error: "No Card Exists"})
    }
    res.status(200).json(upDate)
}

module.exports = {getAllCards, getOneCard, addCard, deleteCard, updateCard}