require('dotenv').config() // and this only Port work from env
const userRoutes= require('./routes/userRoutes')   //importing routes
const connectToDb = require("./config/db")

const express = require('express')              
const app = express()

//


// Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))


connectToDb()

app.use('/', userRoutes)                              // 2md line


module.exports = app