require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./db/connection')
const router = require('./routes/router')

const cartServer = express()
cartServer.use(cors())
cartServer.use(express.json())
cartServer.use(router)


const PORT = 3000 || process.env.PORT
cartServer.listen(PORT,()=>{
    console.log(`Style Guri Server at port ${PORT}`);
})

cartServer.get('/',(req,res)=>{
    res.send(`<h1>Style Guri Server Started and Waiting for client requests!!!</h1>`)
})
