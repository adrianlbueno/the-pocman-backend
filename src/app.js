const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.use(morgan("dev"));
app.use(express.json());

const illustrationRoutes = require("../Routes/illustration.route"); // adjust path if needed
const userRoutes = require("../Routes/users.route"); // adjust path if needed
app.use('/illustrations', illustrationRoutes);
//todo: add user routes
app.use();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    return res.status(200).json({});
  }

  next();
});

module.exports = app;
