const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const illustration = require("../models/Illustration.model");
const SECRET = process.env.JWT_KEY
const token = jwt.sign(illustration,  SECRET);


const getTokenFromHeader = (req, res, next) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
        const token = req.headers.authorization.split(" ")[1];
        const de = JSON.parse(
            Buffer.from(token.split(".")[1], "base64").toString()
        );

        jwt.verify(token, SECRET, (err, decoded) => {
            if (err) {
                next();
            }
            res.tokenPayload = decoded;
        });
    }
    next();
};


app.get("/test-token", (req, res) => {
    res.status(200).send(res.tokenPayload);
});
