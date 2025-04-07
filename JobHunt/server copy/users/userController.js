const user = require('./userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const privatekey = "JobHuntProject";

login = (req,res)=>{
    let validationErrors = [];

    if(!req.body.email){
        validationErrors.push("email is required");
    }
    if(!req.body.password){
        validationErrors.push("password is required");
    }
    if(validationErrors.length>0){
        res.json({
            status:422,
            success:false,
            message:"Validation error occurs",
            errors:validationErrors
        })
    }
    else{
        user.findOne({email:req.body.email})
        .then((userData)=>{
            if(!userData){
                res.json({
                    status: 422,
                    success: false,
                    message: "Email not matched"
                })
            }
            else{
                bcrypt.compare(req.body.password,userData.password,function(err,result){
                    if(result){

                        var payload = {
                            name: userData.name,
                            email: userData.email,
                            userType: userData.userType,
                            userId: userData._id
                        }
                        var token = jwt.sign(payload,privatekey);

                        res.json({
                            status:200,
                            success:true,
                            message:"login successful",
                            token:token,
                            data: userData
                        })
                    }
                    else{
                        res.json({
                            status: 422,
                            success: false,
                            message: "Password not matched"
                        })
                    }
                })
            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal server error",
                errors:err.message
            })
        })
    }
}

module.exports={
    login
}