const express = require('express');
const router = express.Router();
const getTokenFromHeader = require("../middleware/Auth.middleware");
const Illustration = require('../models/Illustration.model');
const {connection } = require("mongoose");

router.get('/', async (req, res) => {
    try {
        const illustrations = await Illustration.find();
        res.json(illustrations);

    } catch (error) {console.error('Error fetching illustrations:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({ message: 'Invalid ID format' });
    }

    try {
        const illustration = await Illustration.findById(id);
        if (!illustration) {
            return res.status(404).json({ message: 'Illustration not found' });
        }
        res.json(illustration);
    } catch (error) {
        console.error('Error fetching illustration:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/', getTokenFromHeader, async (req, res) => {
    try {
        const newIllustration = await Illustration.create();
        res.status(201).json(newIllustration);
    } catch (error) {
        console.error('Error creating illustration:', error);
        res.status(400).json({ message: 'Invalid data', error });
    }
});

module.exports = router;
