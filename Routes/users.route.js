const expreess = require('express')
const router = express.Router()

const User = require('../models/User.model')

router.get('/users', function (req, res,next){
    User.find()
        .then(allPosts =>{
            res.render("index", {allPosts});
        })
        .catch(err => {
            console.log(err)
        })
})
router.post("/signIn", (req, res) => {

})

router.post('/signUp', (req, res) => {

})

