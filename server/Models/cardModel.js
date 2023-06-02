const mongoose = require("mongoose");

const cardsSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      max: 50,
    },
    positionTitle: String,
    user_ID: {
      type: String,
    },
    columnLocation: {
      type: String,
    },
    index: Number,
    cardID: String,
    applicationLink: String,
    dateApplied: Date,
    dueDate: Date,
    responseDate: Date,
    Notes: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cards", cardsSchema);
