const mongoose = require('mongoose');
const Card = require('../Models/Cards')
const userSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        max: 40,
    },
    password: {
        type: String,
        min: 7,
    },
    // aboutMe: {
    //     type: String,
    //     default: "",
    //     max: 300
    // },
    // profilePicture: {
    //     type: String,
    //     default: "",
    // },
    // loaction: String,
    // Specialization: String,
    appliedCards: [{
        type:  mongoose.Schema.Types.Object,
        ref: "Card",
    }]
    // Resume: String,
    // createdAt: {
    //     type: Date,
    //     immutable: true,
    //     default: () => Date.now(),
    // },
    // updatedAt: {
    //     type: Date,
    //     default: () => Date.now(),
    // },
})

module.exports = mongoose.model("Users", userSchema);