const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const userRoutes = require("../Routes/users.route");
const authRoutes = require("../Routes/auth.route");
const illustrationRoutes = require("../Routes/illustration.route");
const cors = require('cors');

app.use(cors());
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});
app.use(morgan("dev"));
app.use(express.json());
app.use('/illustrations', illustrationRoutes);
app.use('/api/users', authRoutes);
app.use('/users', userRoutes);

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
