const User= require('../models/userModel')


// Business logic

exports.some=(req, res)=>{               // router
    res.send("Routes / is working ")
};



exports.createUser= async (req, res) =>{
    try {
        // to collect information from frontend.
        const {name , email}= req.body

        // to check if form filled or not.
        if(!email || !name){
            throw new Error("Name and email are required")
        }


        const userExist= await User.findOne({email})
        if (userExist){
            throw new Error("Email already found")
        }

        // Inserting into database.

        const user = await User.create({name, email})
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user,
            
        })
    } catch (error) {
        console.log(error.message);
    }
}

exports.getUsers= async (req, res)=>{
    try {
        const user= await User.find()
        res.status(201).json({
            success:true,
            user,})
    } catch (error) {
        console.log(error);
        res.status(201).json({
            success:false,
            message:error.message,})
        
    }
}

exports.editUsers= async (req, res)=>{
  try {
    const user= await User.findByIdAndUpdate(req.params.id , req.body)
    res.status(200).json({
        success:true,
        message: "user updated"
    })
  } catch (error) {
    console.log(error);
    res.status(401).json({
        success:false,
        message: error.message
    })
  }
}

exports.deleteUsers= async (req,res)=>{
    try {
        const userId= req.params.id
        const user= await User.findByIdAndDelete(userId)
        res.status(200).json({
            success:true,
            message: "user Deleted"
        })
      } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message: error.message
        })
      }
}