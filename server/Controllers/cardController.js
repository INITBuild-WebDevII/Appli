const asyncHandler = require("express-async-handler");
const Card = require("../Models/cardModel");
const User = require("../Models/userModel");
const mongoose = require("mongoose");

/**
 * @desc Gets all cards for a user
 * @method GET
 * @access private
 * @endpoint /api/cards
 **/
const getAllCards = asyncHandler(async (req, res) => {
  const cards = await Card.find({ user: req.user.id })

  res.status(200).json(cards);
});

/**
 * @desc Gets a single card for a user
 * @method GET
 * @access private
 * @endpoint /api/cards/:id
 **/
const getOneCard = asyncHandler(async (req, res) => {
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
});

/**
 * @desc Create a new card for a user
 * @method POST
 * @access private
 * @endpoint /api/cards/
 **/
const addCard = asyncHandler(async (req, res) => {
  const {
    companyName,
    positionTitle,
    applicationLink,
    dateApplied,
    dueDate,
    responseDate,
    notes,
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
      //card_ID,
      columnLocation,
      user: req.user.id,
    });

    /*
    // adds new card to user's appliedCards via their user_ID
    const add_Card_User = await User.findByIdAndUpdate(req.user.id, {
      $push: { appliedCards: card },
    });

    // updates user's appliedCards
    if (add_Card_User == null) {
      const add_Card_User = await User.findByIdAndUpdate(req.user.id, {
        $set: { appliedCards: card },
      });
    }
    */

    res.status(200).json(card);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * @desc Deletes a single card
 * @method DELETE
 * @access private
 * @endpoint /api/cards/:id
 **/
const deleteCard = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // Check if id is a valid mongodb object id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not Valid Card ID" });
  }

  const card = await Card.findById(id);

  if (!card) {
    return res.status(404).json({ error: "No Card Exists" });
  }

  const user = await User.findById(req.user.id);

  // Check for user
  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }

  // Make sure the logged in user's id matches the card user id
  if (card.user.toString() !== user.id) {
    return res.status(401).json({ error: "User not authorized" });
  }

  //await card.deleteOne({ _id: id });

  await Card.findOneAndDelete({ _id: id });

  // delete's card from User's appliedCards array
  /*const Delete = await User.updateOne(
    { "appliedCards._id": id },
    { $pull: { appliedCards: { _id: id } } }
  );*/

  res.status(200).json(card);
});

/**
 * @desc Updates a single card for a user
 * @method PUT
 * @access private
 * @endpoint /api/cards/:id
 **/
const updateCard = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // Check if id is a valid mongodb object id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not Valid Card ID" });
  }

  const card = await Card.findById(id);

  if (!card) {
    return res.status(404).json({ error: "No Card Exists" });
  }

  const user = await User.findById(req.user.id);

  // Check for user
  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }

  // Make sure the logged in user's id matches the card user id
  if (card.user.toString() !== user.id) {
    return res.status(401).json({ error: "User not authorized" });
  }

  // updates any changed card attributes
  const updatedCard = await Card.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  // updates card column location in user's appliedCards
  /*const upDate = await User.updateOne(
    { "appliedCards._id": req.body.id },
    { $set: { "appliedCards.$.columnLocation": req.body.columnLocation } }
  );*/

  res.status(200).json(updatedCard);
});

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

  const upDate = await User.updateOne(
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
