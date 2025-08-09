const express = require('express')
const router = express.Router()
const {getTokenFromHeader} = require("../middleware/Auth.middleware");
const User = require('../models/User.model');
const ObjectId = require("mongodb").ObjectId;
router.get('/', async (req, res ,next) =>{
     const allUsers = User.find()
        .then(allUsers =>{
            res.render("index", {allUsers});
        })

        .catch(err => {
            next(err);
            console.log(err)
            res.status(500).send({error: "Failed to fetch users"});

        })
});

router.get("/users/:userId", async (req, res,next) => {
    const { userId } = req.params;
    console.log("Request Id:", userId);
    try {
        const user = await User.findById(userId);
        res.status(200).json(user);
    }
    catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Internal server error" });
        next(error);
    }

});

router.put("/:userId", getTokenFromHeader, async (req, res,next) => {
     const payload = req.body;
     const { userId } = req.params;

     console.log("Request Id:", userId);
     console.log("Payload:", payload);
     try {
         const updateUser = await User.findByIdAndUpdate(userId, payload, { new: true });
         res.status(200).json(updateUser);
     }  catch (error) {
         console.error("Error updating user:", error);
         res.status(500).json({ message: "Internal server error" });
         next(error);
     }
});

router.delete("/:userId", getTokenFromHeader, async (req, res, next) => {
     const { userId } = req.params;

     console.log("Request Id:", userId);
     try {
         const updateUser = await User.findByIdAndDelete(userId);
         res.status(200).json({ message: `${updateUser.title} has been deleted` });
     }  catch (error) {
         console.error("Error updating user:", error);
         res.status(500).json({ message: "Something bad happened" });
         next(error);
     }
});



