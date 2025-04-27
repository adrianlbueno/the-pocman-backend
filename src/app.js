require("dotenv").config();
const path = require("path");
const express = require("express");
const jsonServer = require("json-server");
const morgan = require("morgan");

const app = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Middlewares
app.use(morgan("dev"));
app.use(middlewares);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// CORS Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Your API Routes
app.use('/illustrations', router); // `db.json` should have "illustrations" resource
app.use('/users', router);          // `db.json` should have "users" resource

module.exports = app;
