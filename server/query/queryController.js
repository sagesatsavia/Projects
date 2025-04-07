const query = require ("./queryModel")

addQuery = (req,res)=>{
    let validationErrors = [];
    
    if(!req.body.queryName){
        validationErrors.push("NAME IS REQUIRED")
    }
    if(!req.body.queryEmail){
        validationErrors.push("EMAIL IS REQUIRED")
    }
    if(!req.body.querySubject){
        validationErrors.push("SUBJECT IS REQUIRED")
    }
    if(!req.body.queryMessage){
        validationErrors.push("MESSAGE IS REQUIRED")
    }
    if(validationErrors.length > 0){
        res.json({
            status: 422, 
            success: false,
            message: "Validation Error Occurred",
            errors: validationErrors
        })
    } else{
        let queryObj = new query();
        queryObj.queryName= req.body.queryName
        queryObj.queryEmail= req.body.queryEmail
        queryObj.querySubject= req.body.querySubject
        queryObj.queryMessage= req.body.queryMessage
        queryObj.save()
        .then((resSave)=>{
            res.json({
                status: 200, 
                success: true,
                message: "Data Added Successfully",
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
}
getAllData = async (req,res)=>{
    let totalCount = await query.countDocuments().exec();

    query.find()
    .then((queryData)=>{
        res.json({
            status:200,
            success: true,
            message: "Data Loaded Successfully",
            data:queryData,
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
        query.findOne({_id:req.body._id})
        .then((queryData)=>{
            if(!queryData){
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
                    data:queryData
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
        query.findOne({_id:req.body._id})
        .then((queryData)=>{
            if(!queryData){
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
                    data:queryData
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
        query.findOne({_id:req.body._id})
        .then((queryData)=>{
            if(!queryData){
                res.json({
                    status:404,
                    success: false,
                    message: "Data Not Found"
                })
            }
            else{
                query.deleteOne({_id:req.body._id})
                .then (()=>{
                    res.json({
                        status:200,
                        success: true,
                        message: "Data Deleted Successfully",
                        data:queryData
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
        query.findOne({_id:req.body._id})
        .then((queryData)=>{
            if(!queryData){
                res.json({
                    status:404,
                    success: false,
                    message: "Data Not Found"
                })
            }
            else{
                if(req.body.queryName){
                    queryData.queryName = req.body.queryName
                }
                if(req.body.queryEmail){
                    queryData.queryEmail = req.body.queryEmail
                }
                if(req.body.querySubject){
                    queryData.querySubject = req.body.querySubject
                }
                if(req.body.queryMessage){
                    queryData.queryMessage = req.body.queryMessage
                }                
                queryData.save()
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
    addQuery,
    getAllData,
    getSingleData,
    deleteData,
    updateData
}