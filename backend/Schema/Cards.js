const mongoose = require('mongoose');

const cardsSchema = mongoose.Schema({
    companyName: {
        type: String,
        required: true,
        max: 50,
    },
    positionTitle: {
        type: String,
        required: true,
        max: 40,
    },
    applicationLink: {
        type: String,
        unique: true,
        required: true,
    },
    dateApplied: Date,
    Notes: String,
    dueDate: Date,
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    }, 
})

module.exports = mongoose.model("Cards", cardsSchema);