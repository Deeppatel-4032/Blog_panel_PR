const admin_model = require("../models/user_model.js")
const bcrypt = require("bcrypt")

const chanePassCon = (req, res) => {

    res.render("change_Password");
}

const changePasswordCon = (req, res) => {

    const { password } = req.user;

    console.log("password", password);

    const { current_Pass, new_Pass, conf_pass} = req.body;

    bcrypt.compare(current_Pass, password, async (err, result) => {
        if(result) {   
            console.log("result", result);
            if(new_Pass === conf_pass) {
                bcrypt.hash(new_Pass, 10, async (err, hashPass) => {

                    if(!err) {
                        const updatePass = await admin_model.updateOne(
                            { _id : req.user._id },
                            { password : hashPass }
                        )
                        console.log("updatePass", updatePass);        
                        res.redirect("/logInForm")
                    } else {
                        console.log(err, "password not match")
                    }
                })
            } else {
                console.log(err, "new password not match")
                res.redirect("/logInForm")
            }
        } 
    })
}

module.exports = { chanePassCon, changePasswordCon }