const Card = require("../Models/cardModel");
const Users = require("../Models/userModel");
const mongoose = require("mongoose");

// get all cards for a user
const getAllCards = async (req, res) => {
  // ID of user
  const { user_ID } = req.body;

  // gets all cards for a user sorted from newest on top
  const cards = await Card.find({ user_ID: user_ID }).sort({ createdAt: -1 });
  //const cards = await Card.find()

  res.status(200).json(cards);
};

// get a single card
const getOneCard = async (req, res) => {
  const { id } = req.params;

  // Check if id is a valid mongodb object id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Card Exists" });
  }

  const card = await Card.findById(id);

  // Checks if card doesn't exist
  if (!card) {
    return res.status(404).json({ error: "No Card Exists" });
  }

  res.status(200).json(card);
};

// Create New Card
const addCard = async (req, res) => {
  const {
    companyName,
    positionTitle,
    applicationLink,
    dateApplied,
    dueDate,
    responseDate,
    notes,
    user_ID,
    //card_ID,
    columnLocation,
  } = req.body;

  try {
    // create card document
    const card = await Card.create({
      companyName,
      positionTitle,
      applicationLink,
      dateApplied,
      dueDate,
      responseDate,
      notes,
      user_ID,
      //card_ID,
      columnLocation,
    });

    // adds new card to user's appliedCards via their user_ID
    const add_Card_User = await Users.findByIdAndUpdate(user_ID, {
      $push: { appliedCards: card },
    });

    // updates user's appliedCards
    if (add_Card_User == null) {
      const add_Card_User = await Users.findByIdAndUpdate(user_ID, {
        $set: { appliedCards: card },
      });
    }

    res.status(200).json(card);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete a Card
const deleteCard = async (req, res) => {
  const { id } = req.params;

  // Check if id is a valid mongodb object id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Card Exists" });
  }

  const card = await Card.findOneAndDelete({ _id: id });

  // Checks if card doesn't exist
  if (!card) {
    return res.status(404).json({ error: "No Card Exists" });
  }

  // delete's card from User's appliedCards array
  const Delete = await Users.updateOne(
    { "appliedCards._id": id },
    { $pull: { appliedCards: { _id: id } } }
  );

  if (!Delete) {
    return res.status(404).json({ error: "No Card Exists" });
  }

  res.status(200).json(card);
};

// update a card
const updateCard = async (req, res) => {
  const { id } = req.params;

  // Check if id is a valid mongodb object id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Card Exists" });
  }

  // updates any changed card attributes
  const updatedCard = await Card.findByIdAndUpdate(id, req.body, { new: true });

  //Checks if card doesn't exist
  if (!updatedCard) {
    return res.status(400).json({ error: "No Card Exists" });
  }

  // updates card column location in user's appliedCards
  const upDate = await Users.updateOne(
    { "appliedCards._id": req.body.id },
    { $set: { "appliedCards.$.columnLocation": req.body.columnLocation } }
  );

  res.status(200).json(updatedCard);
};




//Update Card location
const updateCardLoc = async (req, res) => {
  //const {id} = req.params
  const { columnLocation, index, id } = req.body;
  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //     return res.status(404).json({error: "No Card Exists"})
  // }

  const upDate_Cards = await Card.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  const upDate = await Users.updateOne(
    { "appliedCards._id": id },
    { $set: { "appliedCards.$.columnLocation": req.body.columnLocation } }
  );

  res.status(200).json({ upDate });
};

module.exports = {
  getAllCards,
  getOneCard,
  addCard,
  deleteCard,
  updateCard,
  updateCardLoc,
};
