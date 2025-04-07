const mongoose = require('mongoose');

const jobApplication = new mongoose.Schema({
    description:{type:String,default:null},
    customerId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"customers"},
    jobId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"jobs"},
    resume:{type: String, default: "no file"},
    status:{type:String,default:"Pending"},
    createdAt:{type:Date,default:Date.now()}
})

module.exports= new mongoose.model("jobApplication",jobApplication);