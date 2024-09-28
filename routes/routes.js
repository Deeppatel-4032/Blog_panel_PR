const express = require("express");
const router = express.Router();
const con = require("../controllers/controller.js");
const regCon = require("../controllers/register_controller.js");
const loginCon = require("../controllers/login_controller.js");
const passport = require("../middlewares/passport_config.js");
const userAuth = require("../middlewares/auth.js");

//dashbord default path
router.get("/", userAuth, con.userDefaultCon);

//register path
router.get("/registerForm", regCon.registerForm);
router.post("/register", regCon.registerCon);

//login path
router.get("/logInForm", loginCon.loginFormCon);
router.post("/login", passport.authenticate('local', { failureRedirect: '/loginForm' }), loginCon.loginCon);

//logout path
router.get("/logOut", loginCon.logOutCon);


module.exports = router;
