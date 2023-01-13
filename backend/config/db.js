const mongoose= require("mongoose")

mongoose.set('strictQuery', false);

const connectToDb=()=>{
    mongoose.connect(process.env.MongoDbUrl)
    .then((conn)=> {
    console.log(`Connected DB: ${conn.Connection.host}`)})
    .catch((err)=>{
        console.log(err.message);
        process.exit(1)
    });
}


module.exports = connectToDb