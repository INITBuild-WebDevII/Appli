const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      max: 50,
    },
    positionTitle: String,
    applicationLink: String,
    dateApplied: Date,
    dueDate: Date,
    responseDate: Date,
    notes: String,
    user_ID: String,
    //card_ID: String,
    columnLocation: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Card", cardSchema);
