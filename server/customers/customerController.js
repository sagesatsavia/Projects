const users = require("../users/userModel");
const customers = require("./customerModel");
const bcrypt = require("bcrypt");
const roundValue = 10;

register = (req,res)=>{

    let validationErrors = [];

    if(!req.body.name){
        validationErrors.push("name is required");
    }
    if(!req.body.email){
        validationErrors.push("email is required");
    }
    if(!req.body.password){
        validationErrors.push("password is required");
    }
    if(!req.body.contact){
        validationErrors.push("contact is required");
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
        users.findOne({email:req.body.email})
        .then((userData)=>{
            if(!userData){
                let userObj = new users()
                userObj.name = req.body.name
                userObj.email = req.body.email
                userObj.password = bcrypt.hashSync(req.body.password,roundValue)
                userObj.save()
                .then((userRes)=>{
                    let cusObj = new customers()
                    cusObj.name = req.body.name
                    cusObj.email = req.body.email
                    cusObj.password = req.body.password
                    cusObj.contact = req.body.contact
                    cusObj.userId = userRes._id
                    cusObj.save()
                    .then((cusRes)=>{
                        userObj.customerId=cusRes._id
                        userObj.save()
                        .then(()=>{
                            res.json({
                                status:200,
                                success:true,
                                message:"User registered successfully",
                                data:cusRes
                            })
                        })
                        .catch((err)=>{
                            res.json({
                                status:500,
                                success:false,
                                message:"Internal server error",
                                errors:err.message
                            })
                        })
                    })
                    .catch((err)=>{
                        res.json({
                            status:500,
                            success:false,
                            message:"Internal server error",
                            errors:err.message
                        })
                    })                
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
            else{
                res.json({
                    status:422,
                    success:false,
                    message:"User already exists",
                    data:userData
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


updateStatus = (req,res)=>{

    let validationErrors = [];

    if(!req.body._id){
        validationErrors.push("Id is required");
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
        customers.findOne({_id:req.body._id})
        .then((customerData)=>{
            if(!customerData){
                res.json({
                    status:404,
                    success:false,
                    Message:"User Does Not Exist",
                    errors: err.message
                })
            }
            else{
                customerData.status = req.body.status
                customerData.save()
                .then((resSave)=>{
                    res.json({
                        status: 200, 
                        success: true,
                        message: "User Status Updated Successfully",
                        data: resSave
                    })
                })
                .catch((err)=>{
                    res.json({
                        status: 500,
                        success: false,
                        message: "Internal Server Error",
                        errors: err.message
                    })
                })
            }
        })
        .catch((err)=>{
            res.json({
                status: 500,
                success: false,
                message: "Internal Server Error",
                errors: err.message
            })
        })
    }
}

getAllData = async(req,res)=>{
    let totalCount = await customers.countDocuments().exec();

    customers.find()
    .then((customerData)=>{
        if(!customerData){
            res.json({
                status:404,
                success: "false",
                message:"Customers not Found",
                errors:err.message
            })
        }
        else{
            res.json({
                status:200,
                success: true,
                message: "Customers Loaded Successfully",
                data: customerData,
                totalData: totalCount
            })
        }
    })
    .catch((err)=>{
        res.json({
            status:500,
            success: false,
            message: "internal Server Error",
            errors: err.message
        })
    })
}


getSingleData = (req,res)=>{
    let validationErrors = [];

    if(!req.body._id){
        validationErrors.push("ID IS REQUIRED")
    }
    if(validationErrors.length > 0){
        res.json({
            status: 422, 
            success: false,
            message: "Validation Error Occurred",
            errors: validationErrors
        })
    }
    else{
        customers.findOne({_id:req.body._id})
        .then((customerData)=>{
            if(!customerData){
                res.json({
                    status:404,
                    success: false,
                    message:"Customer Not Found",
                    errors: err.message
                })
            }
            else{
                res.json({
                    status:200,
                    success: true,
                    message: "Customer Loaded Successfully",
                    data:customerData
                })
            }
        }).catch((err)=>{
            res.json({
                status:500,
                success:false,
                message: "Internal server error",
                errors: err.message
            })
        })
    }
}




module.exports={
    register,
    updateStatus,
    getAllData,
    getSingleData
}