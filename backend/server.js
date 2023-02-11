const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// middleware
app.use(express.json()); // Allows our API to parse json

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

mongoose.set("strictQuery", false);

// connecting to MongoDB Atlas database
mongoose
  .connect(MONGO_URI)
  .then(() => {
    // listens for requests
    app.listen(PORT, () => {
      console.log(`Connected to DB & Listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// test connection
app.get("/", (req, res) => {
  // sends back json object string
  res.json({ msg: "Welcome" });
});

app.get("/hello", (req, res) => {
  // sends back json object string
  res.json({ msg: "Hello" });
});
