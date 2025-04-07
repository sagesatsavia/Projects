const category = require ("./categoryModel")

add = (req, res)=> {

    let validationErrors = [];

    if(!req.body.categoryName){
        validationErrors.push("NAME IS REQUIRED")
    }

    if(!req.file){
        validationErrors.push("IMAGE IS REQUIRED")
    }

    if(!req.body.categoryDescription){
        validationErrors.push("DESCRIPTION IS REQUIRED")
    }

    if(validationErrors.length > 0){
        res.json({
            status: 422, 
            success: false,
            message: "Validation Error Occurred",
            errors: validationErrors
        })
    }else{
        category.findOne({categoryName: req.body.categoryName})
        .then((categoryData)=>{
            if (!categoryData){
                let catObj = new category();
                catObj.categoryName= req.body.categoryName
                catObj.categoryImage= "category/" + req.file.filename
                catObj.categoryDescription= req.body.categoryDescription
                catObj.save()
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
            }else{
                res.json({
                    status: 422, 
                    success: false,
                    message: "Data Already Exists",
                    data: categoryData
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
    let totalCount = await category.countDocuments().exec();

    category.find()
    .then((categoryData)=>{
        res.json({
            status:200,
            success: true,
            message: "Data Loaded Successfully",
            data:categoryData,
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
        category.findOne({_id:req.body._id})
        .then((categoryData)=>{
            if(!categoryData){
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
                    data:categoryData
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
        category.findOne({_id:req.body._id})
        .then((categoryData)=>{
            if(!categoryData){
                res.json({
                    status:404,
                    success: false,
                    message: "Data Not Found"
                })
            }
            else{
                category.deleteOne({_id:req.body._id})
                .then (()=>{
                    res.json({
                        status:200,
                        success: true,
                        message: "Data Deleted Successfully",
                        data:categoryData
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
        category.findOne({_id:req.body._id})
        .then((categoryData)=>{
            if(!categoryData){
                res.json({
                    status:404,
                    success: false,
                    message: "Data Not Found"
                })
            }
            else{
                if(req.body.categoryName){
                    categoryData.categoryName = req.body.categoryName
                }
                if(req.body.categoryDescription){
                    categoryData.categoryDescription = req.body.categoryDescription
                }
                if(req.file){
                    categoryData.categoryImage = "category/" + req.file.filename
                }
                categoryData.save()
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
    add,
    getAllData,
    getSingleData,
    deleteData,
    updateData
}