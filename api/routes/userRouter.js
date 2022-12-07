const router = require('express').Router()

//  login
router.post('/login', async (req, res) => {
    const {username, password} = req.body
    if(username === 'admin' && password === 'balls'){
        res.status(200).json({message: `Welcome back ${username}`})
    }
    else {
        res.status(401).json({message: 'Invalid credentials'})
    }
})


module.exports = router