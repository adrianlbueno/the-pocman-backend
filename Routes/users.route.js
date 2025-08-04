const express = require('express')
const router = express.Router()

const User = require('../models/User.model');

router.get('/users', function (req, res,next){
    User.find()
        .then(allUsers =>{
            res.render("index", {allUsers});
        })
        .catch(err => {
            console.log(err)
        })
});

router.post("/users/login", (req, res) => {
    const user = req.app;
    const email = req.body.email;
    const password = req.body.password;

})

router.post('/users/signup', (req, res) => {

});

router.post('/users/:id', (req, res) => {
})

