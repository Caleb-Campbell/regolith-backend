const router = require('express').Router()
const dummyData  = require('./dummyData')

router.get('/', async (req, res) => {
    try{
        res.status(200).json(dummyData)
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
})


module.exports = router