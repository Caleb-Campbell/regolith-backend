const router = require('express').Router()
const Users = require('./models/users')

router.get('/', async (req, res) => {
    try{
        const users = await Users.find()
        res.status(200).json(users)
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
})


module.exports = router