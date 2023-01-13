const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true, "Name is required"],
        trim:true,
        maxlength:[25, "Name must be less than 26 character"]
    },
    email:{
        type:String,
        require:[true, "Name is required"],
        unique:true
    }
})

module.exports= mongoose.model("User" ,userSchema)   // for user controllers.