require("dotenv").config();
const jsonServer = require("json-server");
const morgan = require("morgan");
const express = require("express");
const app = express().use(express.static(__dirname + '/'))
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 4000;

const illustrationRoute = require("./Routes/illustration.route");
server.use(middlewares);
server.use(morgan("dev"));
server.use((req, res, next) => {
  // Middleware to disable CORS
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
server.use(router);
app.use(express.static('public'))

app.use('/illustrations', illustrationRoute);

app.listen(PORT, function (){
  console.log(`Server is running on port ${PORT}`);
})

module.exports = app