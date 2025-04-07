const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    jobName:{type: String, default: null},
    categoryID:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"category"},
    salary:{type: String, default: null},
    startDate:{type: String, default: null},
    endDate:{type: String, default: null},
    location:{type: String, default: null},
    jobType:{type: String, default: null},
    experience:{type: String, default: null},
    qualifications:{type: String, default: null},
    description:{type: String, default: null},
    vacancy:{type: String, default: null},
    jobImage:{type: String, default: "no picture"}

})
module.exports = new mongoose.model("jobs",jobSchema);