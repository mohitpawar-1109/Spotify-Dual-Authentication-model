const mongoose = require("mongoose");

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("database connected succesfully")
    }
    catch(err){
        console.error("Failed to connect DB",err)
    }
}


module.exports = connectDB