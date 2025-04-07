const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    name:{type:String,default:null},
    email:{type:String,default:null},
    password:{type:String,default:null},
    contact:{type:String,default:null},
    userId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"users"},
    userType:{type:Number,default:2}, // 1 for admin, 2 for user
    status:{type:String,default:"unblocked"},
    createdAt:{type:Date,default:Date.now()}
})

module.exports= new mongoose.model("customers",customerSchema);