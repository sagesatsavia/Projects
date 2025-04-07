const jwt = require('jsonwebtoken');
const privatekey = "JobHuntProject";

module.exports = (req,res,next)=> {
    var token = req.headers['Authorization'];
    jwt.verify(token,privatekey,function(err,result){
        if(err == null){
            req.body['tokenData']= result;
            next();
        }
        else{
            res.json({
                status:403,
                success:false,
                message:"Token not found, please Login first"
            })
        }
    })
}