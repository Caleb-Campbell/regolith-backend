const router = require('express').Router()

router.get('/', (req, res) => {
    res.status(200).json({message: 'you got the users and then some!'})
})


module.exports = router