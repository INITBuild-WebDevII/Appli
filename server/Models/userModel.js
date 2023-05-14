const mongoose = require("mongoose");

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
    required: true,
    min: 7,
  },
  // profilePicture: {
  //     type: String,
  //     default: "",
  // },
  appliedCards: [
    {
      type: mongoose.Schema.Types.Object,
      ref: "Card",
    },
  ],
}, {
  timestamps: true
});

module.exports = mongoose.model("User", userSchema);
