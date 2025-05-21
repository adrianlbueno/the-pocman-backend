const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const connectDb = require('../db');
connectDb();

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});
app.use(morgan("dev"));
app.use(express.json());

const illustrationRoutes = require("../Routes/illustration.route"); // adjust path if needed
app.use('/illustrations', illustrationRoutes);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

module.exports = app;
