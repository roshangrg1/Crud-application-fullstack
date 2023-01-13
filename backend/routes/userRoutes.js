// URL Path

const express = require('express')        //importing express.

const {some, createUser, getUsers,editUsers,deleteUsers}=require('../controller/userControllers')



var router = express.Router()              // importing route using docs 



// routes

router.get("/", some)
router.post("/createusers", createUser)
router.get("/getUsers", getUsers)
router.put("/editUsers/:id", editUsers)
router.delete("/deleteUsers/:id", deleteUsers)

module.exports = router                    // from line 5.
