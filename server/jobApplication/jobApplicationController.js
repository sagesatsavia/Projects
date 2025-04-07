const jobApplication = require("./jobApplicationModel");

applyJob = (req,res) =>{
    let validationErrors = [];

    if(!req.body.description){
        validationErrors.push("DESCRIPTION IS REQUIRED")
    }
    if(!req.file){
        validationErrors.push("RESUME IS REQUIRED")
    }
    if(!req.body.jobId){
        validationErrors.push(" JOB ID IS REQUIRED")
    }
    if(!req.body.customerId){
        validationErrors.push("CUSTOMER ID IS REQUIRED")
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
        let jobApplicationObj = new jobApplication()
        jobApplicationObj.description= req.body.description
        jobApplicationObj.customerId = req.body.customerId
        jobApplicationObj.jobId = req.body.jobId
        jobApplicationObj.resume = "jobApplication/" + req.file.filename
        jobApplicationObj.save()
        .then((resSave)=>{
            res.json({
                status: 200, 
                success: true,
                message: "Job Applied Successfully",
                data: resSave
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
    else {
        jobApplication.findOne({_id:req.body._id})
        .then((jobApplicationData)=>{
            if(!jobApplicationData){
                res.json({
                    status:404,
                    success: false,
                    message: "Data Not Found"
                })
            }
            else{
                res.json({
                    status:200,
                    success: true,
                    message: "job Application Loaded Successfully",
                    data:jobApplicationData
                })
            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message: "Internal server error",
                errors: err.message
            })
        })
    }
}

getAllData = async(req,res)=>{
    let totalCount = await jobApplication.countDocuments(req.body).exec();

    jobApplication.find(req.body).populate("jobId").populate("customerId")
    .then((jobApplicationData)=>{
        res.json({
            status:200,
            success: true,
            message: "Data Loaded Successfully",
            data:jobApplicationData,
            totalData:totalCount
        })
    })
    .catch((err)=>{
        res.json({
            status:500,
            success:false,
            message: "Internal server error",
            errors: err.message
        })
    })
}

updateStatus = (req,res)=>{
    let validationErrors=[];

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
        jobApplication.findOne({_id:req.body._id})
        .then((jobApplicationData)=>{
            if(!jobApplicationData){
                res.json({
                    status:404,
                    success:false,
                    Message:"Job Applications Do Not Exist",
                    errors: err.message
                })
            }
            else{
                jobApplicationData.status = req.body.status
                jobApplicationData.save()
                .then((resSave)=>{
                    res.json({
                        status: 200, 
                        success: true,
                        message: "Job Application Status Updated Successfully",
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

module.exports = {
    applyJob,
    getSingleData,
    getAllData,
    updateStatus
}