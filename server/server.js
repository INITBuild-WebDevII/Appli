const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors")
const cors = require("cors");
const dotenv = require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const userRoutes = require("./Routes/userRoutes");
const cardRoutes = require("./Routes/cardRoutes");
const app = express();

// middleware
app.use(express.json()); // Allows our API to parse json
app.use(express.urlencoded({extended: false}))
app.use(cors()); // allow cross-origin resource sharing
app.use(helmet()); //Security (Adds HTTP Headers)
//app.use(morgan("combined")); //Logger HTTP Request

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

mongoose.set("strictQuery", false);

// connecting to MongoDB Atlas database
mongoose
  .connect(MONGO_URI)
  .then(() => {
    // listens for requests
    app.listen(PORT, () => {
      console.log(`MongoDB Connected & Listening on port ${PORT}`.cyan.underline);
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1)
  });

// ROUTES
app.use("/api/users", userRoutes);
app.use("/api/cards", cardRoutes);

// test connection
app.get("/", (req, res) => {
  // sends back json object string
  res.json({ msg: "Welcome" });
});

app.get("/hello", (req, res) => {
  // sends back json object string
  res.json({ msg: "Hello" });
});
