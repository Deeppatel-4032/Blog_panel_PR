const admin_model = require("../models/user_model")
const bcrypt = require("bcrypt");
// const otp_Generator = require("otp-generator");
const nodemailer = require("nodemailer");
const randomstring = require("randomstring");

let myOTP = null; 
let refreshToken = null;

//forgot password page render
const frogotPassConForm = (req, res) => {
    res.render("forgot_Password", { id : req.params.id});
}

const errorPageCon = (req, res) => {
    res.render("errorPage");
}

const sendMailMsgCon = (req, res) => {
    res.render("sendMailMsg");
}

//forgot password no data pass
const forgotPassowrdCon = async (req, res) => {

    const {email} = req.body;

    //user fide
    const user = await admin_model.findOne({email});
    console.log("user", user);

    if(!user) {
        //user ni male redirect forgot page
        res.redirect("/forgotPassForm");

    } else {

        const refToken = randomstring.generate();

        console.log("refToken", refToken);
        await admin_model.updateOne({email}, {refreshToken : refToken})
        
        const link = `http://localhost:5012/resetPassForm/${user._id}`
        console.log("link", link);

        const useruthe = nodemailer.createTransport({
            host : "smtp.gmail.com",
            service : "gmail",
            port : 465,
            secure : true,
            auth : {
                user : "deeppatel7868@gmail.com",    
                pass : "ytak ekpz evpz pqoz"
            }
        })

        const mailOptionsRce = {
            from : "deeppatel7868@gmail.com",
            to : user.email,
            subject : "Reset Password",
            text : `your reset password Link ${link}`,
        }

        useruthe.sendMail(mailOptionsRce, (err, info) => {
            if(!err) {
                res.redirect(`sendMailMsg/${user._id}`);
            } else {
                console.log("Error not send the mail", err);
            }
        })

        // //generate otp pkg > i
        // const otp = otp_Generator.generate(4,
        //     { 
        //         lowerCaseAlphabets: false,
        //         upperCaseAlphabets: false,
        //         specialChars: false
        //     })
        // console.log("otp", otp); 

        // // myOTP variable and otp 
        // myOTP = otp;

        //redirect otp page with user database id
        // res.redirect(`chackOtpForm/${user._id}`);

    }
}

const chackOPTConForm = (req, res) => {
    // render chack_otp form with id from URL params 
    res.render("chack_otp", { id : req.params.id });
};

// opt chek 
const chackOPTCon = async (req, res) => {
    const { id } = req.params;
    const { otp } = req.body; 

    // Compare the OTP with the generated myOTP variable and otp 
    if(myOTP === otp) {
        // Redirect to the reset password form with the user's ID
        res.redirect(`/resetPassForm/${id}`); 
    } else {
        // Redirect back to the form with an error message
        res.redirect(`/chackOtpForm/${id}`);
    }
};


const resetPassFormCon =  async (req, res) => {

    const loginUser = await admin_model.findOne({_id : req.params.id});
    try {
        if (loginUser) {
            console.log("loginUser", loginUser);
            if (loginUser.refreshToken) {
                //render the reset form 
                res.render("reset_Password", { id: req.params.id });
            } else {
                res.redirect("/errorPage");
            }
        } else {
            res.redirect("/logInForm");
        }
    } catch (error) {
        console.log(error, "error");
    }

}

const resetPasswordCon = async (req, res) => {

    const { id } = req.params;
    const { new_Pass, conf_Pass } = req.body;

    // Compare the new password with the confirmed password
    if(new_Pass === conf_Pass) {
        // Hash the new password
        bcrypt.hash(new_Pass, 10, async (err, hashPass) => {
            // Check for any errors
            if(!err) {
                // Update the user's password in the database
                const updatePass = await admin_model.updateOne(
                    { _id: id },  // Use the ID from the URL
                    { password: hashPass, refreshToken: null },
                    { new: true }           
                );
                console.log("updatePass", updatePass);        
                res.redirect("/logInForm");
            } else {
                console.log(err, "Password hashing error");
            }
        });
    } else {
        console.log("New password does not match confirmation");
        // Redirect back to the form if passwords don't match
        res.redirect(`/resetPassForm/${id}`);
    }
};



// Export the functions to be used in the routes
module.exports = { 
                    frogotPassConForm, 
                    forgotPassowrdCon, 
                    chackOPTConForm, 
                    chackOPTCon,
                    resetPassFormCon, 
                    resetPasswordCon,
                    errorPageCon,
                    sendMailMsgCon
                };