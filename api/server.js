require('dotenv').config()
const express = require('express')
const server = express()
const userRouter = require('./routes/userRouter')
server.use(express.json())

server.use('/api/users', userRouter)



server.use('*', (req, res)=> {
    res.status(404).json({message: 'not worky'}) 
})

module.exports = server