const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // firstName: {
    //     type: String,
    //     required: true,
    //     min: 2,
    //     min: 20,
    // },
    // lastName: {
    //     type: String,
    //     required: true,
    //     min: 2,
    //     max: 20,
    // },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        max: 40,
    },
    password: {
        type: String,
        required: true,
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
    // appliedCards: {
    //     type: Array,
    //     default: [ ],
    //     },
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