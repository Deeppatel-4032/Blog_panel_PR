const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    description: {
        type : String,
        required : true
    },
    imgPath : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }

})

const blog_model = mongoose.model("blogs", blogSchema)

module.exports = blog_model;