const path = require("path");
const express = require("express");
const morgan = require("morgan");

const app = express();
require('./db');
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
const illustrationRoutes = require("../Routes/illustration.route");
app.use('/illustrations', illustrationRoutes);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

module.exports = app;
