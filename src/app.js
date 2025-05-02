require("dotenv").config();
const path = require("path");
const express = require("express");
const jsonServer = require("json-server");
const morgan = require("morgan");

const app = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

app.use(morgan("dev"));
app.use(middlewares);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use('/illustrations', router);
app.use('/users', router);

module.exports = app;
