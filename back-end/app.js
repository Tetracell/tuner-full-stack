//Dependencies
const cors = require("cors");
const express = require("express");

//Config
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to it's not a tuner");
});

const songController = require("./controllers/songController");
app.use("/songs", songController);

//404
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

//Export
module.exports = app;
