require("dotenv").config();
const jsonServer = require("json-server");
const morgan = require("morgan");
const express = require("express");
const app = express();
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 4000;


server.use(middlewares);
server.use(morgan("dev"));
server.use((req, res, next) => {
  // Middleware to disable CORS
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
server.use(router);
app.use(express.static('public'))


module.exports = app