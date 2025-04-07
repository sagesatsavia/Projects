const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
    queryName:{type:String,default:null},
    queryEmail:{type:String,default:null},
    querySubject:{type:String,default:null},
    queryMessage:{type:String,default:null}
})

module.exports = new mongoose.model("query",querySchema);