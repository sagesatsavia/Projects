const router = require('express').Router();
const multer = require("multer");

const categoryController = require('../server/category/categoryController');
const jobController = require('../server/jobs/jobController');
const queryController = require('../server/query/queryController');
const customerController = require('../server/customers/customerController');
const userController = require('../server/users/userController');
const jobApplicationController = require('../server/jobApplication/jobApplicationController');

//categories
const categoryStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/category')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
const categoryUpload = multer({ storage: categoryStorage })



//apply job
const applyJobStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/jobApplication')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
const applyJobUpload = multer({ storage: applyJobStorage })


//add jobs
const addJobStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/jobs')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
const jobUpload = multer({ storage: addJobStorage })



//ALL ROUTES

//category routes
router.post('/category/add',categoryUpload.single('categoryImage'),categoryController.add);
router.post('/category/getAllData',categoryController.getAllData);
router.post('/category/getSingleData',categoryController.getSingleData);
router.post('/category/deleteData',categoryController.deleteData);
router.post('/category/updateData',categoryUpload.single('categoryImage'),categoryController.updateData);

//jobs routes
router.post('/jobs/addJob',jobUpload.single('jobImage'),jobController.addJob);
router.post('/jobs/getAllData',jobController.getAllData);
router.post('/jobs/getSingleData',jobController.getSingleData);
router.post('/jobs/deleteData',jobController.deleteData);
router.post('/jobs/updateData',jobUpload.single('jobImage'),jobController.updateData);

//apply jobs 
router.post('/jobApplication/applyJob',applyJobUpload.single('resume'),jobApplicationController.applyJob);
router.post('/jobApplication/getAllData',jobApplicationController.getAllData);
router.post('/jobApplication/getSingleData',jobApplicationController.getSingleData);
router.post("/jobApplication/updateStatus",jobApplicationController.updateStatus);


//query routes
router.post('/query/addQuery',queryController.addQuery);
router.post('/query/getAllData',queryController.getAllData);
router.post('/query/getSingleData',queryController.getSingleData);
router.post('/query/deleteData',queryController.deleteData);
router.post('/query/updateData',queryController.updateData);


//customer routes
router.post("/customers/register",customerController.register);
router.post("/customers/updateStatus",customerController.updateStatus);
router.post('/customers/getAllData',customerController.getAllData);
router.post('/customers/getSingleData',customerController.getSingleData);


//login
router.post("/users/login",userController.login);

//admin login
router.post("/admin/login",userController.login);

//middleware
router.use(require('../config/middleware'));

module.exports=router;