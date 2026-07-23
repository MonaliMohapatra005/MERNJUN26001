const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    age:{
        type:Number
    },
    email:{
        type:String,
        require:true,
    },
    passwors:{
        type: String
    }

});


const User = mongoose.model("User", userSchema);
module.exports= User
