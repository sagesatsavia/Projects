const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/jobhunt")

.then(()=>{
    console.log("database connected");
})
.catch((err)=>{
    console.log("database not connected");
    console.log(err);
})