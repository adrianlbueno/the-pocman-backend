const express = require('express');
const router = express.Router();
const getTokenFromHeader = require("../middleware/Auth.middleware");
const Illustration = require('../models/Illustration.model');

router.get('/illustrations', async (req, res, next) => {
    try {
        const illustrations = await Illustration.find();
        console.log(illustrations)

        res.json(illustrations);
    } catch (error) {
        next(error);
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
