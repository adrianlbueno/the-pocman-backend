const express = require('express');
const app = express();
const getTokenFromHeader = require("../middleware/Auth.middleware")
const Illustration = require('models/Illustration.model');
const {goNext} = require("json-server-auth/dist/shared-middlewares");

app.get('/', async (req, res) => {
    try{
        const illustrations = await Illustration.find();
        console.log("retrieved illustrations", illustrations)
        res.json(illustrations)
    }catch (error) {
        next(error);
        res.status(5000).send({error: "Fail to retrieve Illustrations"})
    }
});

app.post('/', getTokenFromHeader, async (req, res) => {
    try{
        const illustration = await Illustration.create(req.body);
        res.status(201).json(illustration);
    }catch (error){
        next(error)
    }
});

app.put('/illustrations', (req, res) => {
    res.send('PUT request to /illustrations');
});

app.delete('/illustrations', (req, res) => {
    res.send('DELETE request to /illustrations');
});

module.exports = app;
