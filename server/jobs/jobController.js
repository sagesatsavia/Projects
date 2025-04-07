const jobs = require ("./jobModel")

addJob = (req,res)=>{

    let validationErrors =[];
    if(!req.body.jobName){
        validationErrors.push("JOB NAME IS REQUIRED")
    }
    if(!req.file){
        validationErrors.push("IMAGE IS REQUIRED")
    }
    if(!req.body.categoryID){
        validationErrors.push("CATEGORY ID IS REQUIRED")
    }
    if(!req.body.salary){
        validationErrors.push("SALARY IS REQUIRED")
    }
    if(!req.body.startDate){
        validationErrors.push("START DATE IS REQUIRED")
    }
    if(!req.body.endDate){
        validationErrors.push("END DATE IS REQUIRED")
    }
    if(!req.body.location){
        validationErrors.push("LOCATION IS REQUIRED")
    }
    if(!req.body.jobType){
        validationErrors.push("JOB TYPE IS REQUIRED")
    }
    if(!req.body.experience){
        validationErrors.push("EXPERIENCE IS REQUIRED")
    }
    if(!req.body.qualifications){
        validationErrors.push("QUALIFICATIONS IS REQUIRED")
    }
    if(!req.body.description){
        validationErrors.push("description IS REQUIRED")
    }
    if(!req.body.vacancy){
        validationErrors.push("VACANCY IS REQUIRED")
    }
    if(validationErrors.length > 0 ){
        res.json({
            status:422,
            success:false,
            message: "Validation Error Occurred",
            errors: validationErrors
        })
    }else{
        jobs.findOne({jobName: req.body.jobName})
        .then((jobData)=>{
            if(!jobData){
                let jobObj = new jobs();
                jobObj.jobName = req.body.jobName
                jobObj.categoryID = req.body.categoryID
                jobObj.jobImage= "jobs/" + req.file.filename
                jobObj.salary = req.body.salary
                jobObj.startDate = req.body.startDate
                jobObj.endDate = req.body.endDate
                jobObj.location = req.body.location
                jobObj.jobType = req.body.jobType
                jobObj.experience = req.body.experience
                jobObj.qualifications = req.body.qualifications
                jobObj.description = req.body.description
                jobObj.vacancy = req.body.vacancy
                jobObj.save()
                .then((resSave)=>{
                    res.json({
                        status: 200, 
                        success: true,
                        message: "Data Added Successfully",
                        data: resSave
                    })
                }) .catch((err)=>{
                    res.json({
                        status: 500,
                        success: false,
                        message: "Internal Server Error",
                        errors: err.message
                    })
                })
            }else{
                res.json({
                    status: 422, 
                    success: false,
                    message: "Data Already Exists",
                    data: jobData
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

getAllData = async (req,res)=>{
    let totalCount = await jobs.countDocuments(req.body).exec();

    jobs.find(req.body).populate("categoryID")
    .then((jobData)=>{
        res.json({
            status:200,
            success: true,
            message: "Data Loaded Successfully",
            data:jobData,
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

getSingleData= (req,res)=>{
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
        jobs.findOne({_id:req.body._id})
        .then((jobData)=>{
            if(!jobData){
                res.json({
                    status:404,
                    success: false,
                    message: "Data Not Found"
                })
            }else{
                res.json({
                    status:200,
                    success: true,
                    message: "Data Loaded Successfully",
                    data:jobData
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

deleteData= (req,res)=>{
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
        jobs.findOne({_id:req.body._id})
        .then((jobData)=>{
            if(!jobData){
                res.json({
                    status:404,
                    success: false,
                    message: "Data Not Found"
                })
            }
            else{
                jobs.deleteOne({_id:req.body._id})
                .then (()=>{
                    res.json({
                        status:200,
                        success: true,
                        message: "Data Deleted Successfully",
                        data:jobData
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

updateData = (req,res)=>{
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
        jobs.findOne({_id:req.body._id})
        .then((jobData)=>{
            if(!jobData){
                res.json({
                    status:404,
                    success: false,
                    message: "Data Not Found"
                })
            }
            else{
                if(req.body.jobName){
                    jobData.jobName = req.body.jobName
                }
                if(req.body.description){
                    jobData.description = req.body.description
                }
                if(req.body.salary){
                    jobData.salary = req.body.salary
                }
                if(req.file){
                    jobData.jobImage= "jobs/" + req.file.filename
                }
                if(req.body.startDate){
                    jobData.startDate = req.body.startDate
                }
                if(req.body.endDate){
                    jobData.endDate = req.body.endDate
                }
                if(req.body.location){
                    jobData.location = req.body.location
                }
                if(req.body.jobType){
                    jobData.jobType = req.body.jobType
                }
                if(req.body.experience){
                    jobData.experience = req.body.experience
                }
                if(req.body.qualifications){
                    jobData.qualifications = req.body.qualifications
                }
                if(req.body.vacancy){
                    jobData.vacancy = req.body.vacancy
                }
                if(req.body.categoryID){
                    jobData.categoryID = req.body.categoryID
                }
                jobData.save()
                .then((resSave)=>{
                    res.json({
                        status:200,
                        success: true,
                        message: "Data Updated Successfully",
                        data:resSave
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



module.exports = {
    addJob,
    getAllData,
    getSingleData,
    deleteData,
    updateData
}