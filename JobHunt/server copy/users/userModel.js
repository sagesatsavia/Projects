const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type:String,default:null},
    email:{type:String,default:null},
    password:{type:String,default:null},
    customerId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"customers"},
    userType:{type:Number,default:2}, //  1 for admin, 2 for user
    status:{type:Boolean,default:true},
    createdAt:{type:Date,default:Date.now()}
})

module.exports= new mongoose.model("users",userSchema);