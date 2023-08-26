const express = require("express");
const {
  getAllCards,
  getOneCard,
  addCard,
  deleteCard,
  updateCard,
  updateCardLoc,
} = require("../Controllers/cardController");
const router = express.Router();
const { protect } = require("../Middleware/authMiddleware");

router.use(protect);

// get all cards
router.get("/", getAllCards);

// creates a new card
router.post("/", addCard);

// get a single card
router.get("/:id", getOneCard);

// deletes a single card
router.delete("/:id", deleteCard);

// updates a single card
router.put("/:id", updateCard);

// location
router.patch("/Test", updateCardLoc);

module.exports = router;
