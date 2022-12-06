require('dotenv').config()
const express = require('express')
const server = express()
const userRouter = require('./userRouter')
const mongoose = require('mongoose')

mongoose.set('strictQuery', true)
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => {console.error(error)})
db.on('open', () => {console.log('Connected to Database')})

server.use(express.json())

server.use('/api/users', userRouter)



server.use('*', (req, res)=> {
    res.status(404).json({message: 'not worky'}) 
})

module.exports = server