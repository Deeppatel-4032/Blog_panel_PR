const mongoose = require("mongoose");
require("dotenv").config

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("admin db is connected.....!");
}).catch((err) => {
    console.log("admin db is not connected.....!", err);
})