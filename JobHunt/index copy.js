const express = require("express");
const app = express();
const port = 3030;
const db = require("./config/db");


var cors= require('cors')
app.use(cors())




app.use(express.urlencoded({extended:false}))
app.use(express.json({limit:'50mb'}))
app.use(express.static(__dirname+("/public/")))
const route = require('./routes/apiRoutes')
app.use('/api',route)

const seeder = require("./config/seeder")
seeder.adminseeder()


app.get("/home",(req,res)=>{
    res.send("this is a node js project");
})



app.listen(port,()=>{
    console.log("server listening on port: ",+ port);
})
