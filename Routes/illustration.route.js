const express = require('express');
const router = express.Router();
const getTokenFromHeader = require("../middleware/Auth.middleware");
const Illustration = require('../models/Illustration.model');
const {response} = require("express");

router.get('/', async (req, res, next) => {

        const illustrations = await Illustration.find({})

        res.json(illustrations);

});

router.get('/:id', async (req, res, next) => {
    const {id } = req.params;
    console.log("id", id)
    if (id.match(/^[0-9a-fA-F]{24}$/)) {

        const illustrations = await Illustration.findById(id)
        res.json(illustrations);
    }
});

router.post('/', getTokenFromHeader, async (req, res, next) => {
    try {
        const illustration = await Illustration.create(req.body);
        res.status(201).json(illustration);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
