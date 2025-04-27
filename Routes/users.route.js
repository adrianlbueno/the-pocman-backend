const expreess = require('express')
const router = express.Router()

const User = require('../models/User.model')

router.get('/users', function (req, res,next){
    User.find()
        .then(allUsers =>{
            res.render("index", {allUsers});
        })
        .catch(err => {
            console.log(err)
        })
})

router.post("/signIn", (req, res) => {

})

router.post('/signUp', (req, res) => {

})

