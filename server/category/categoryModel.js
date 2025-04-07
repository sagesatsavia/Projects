const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    categoryName:{type: String, default: null},
    categoryImage:{type: String, default: "no_img.jpg"},
    categoryDescription:{type: String, default: null},
    status:{type: Boolean, default: true},
    createdAt:{type: Date, default: Date.now()}
})
module.exports = new mongoose.model("category",categorySchema);