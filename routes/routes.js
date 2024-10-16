const express = require("express");
const router = express.Router();
const con = require("../controllers/controller.js");
const regCon = require("../controllers/register_controller.js");
const loginCon = require("../controllers/login_controller.js");
const passport = require("../middlewares/passport_config.js");
const blogCon = require("../controllers/blog_controller.js");
const myBlog = require("../controllers/myBlog_con.js");
const userAuth = require("../middlewares/auth.js");
const upload = require("../middlewares/multer_middlware.js");
const forgotCon = require("../controllers/forgotPassController.js");
const changeCon = require("../controllers/ChangePass_Controller.js");
const addTopic = require("../controllers/add_topic_con.js");
const addSubTopic = require("../controllers/subTopic_Controller.js");


//dashbord default path
router.get("/", userAuth, con.userDefaultCon);


//register path
router.get("/registerForm", regCon.registerForm);
router.post("/register", upload.single("userPath"), regCon.registerCon);

//login path
router.get("/logInForm", loginCon.loginFormCon);
router.post("/login", passport.authenticate('local', { failureRedirect: '/loginForm' }), loginCon.loginCon);

//user profile
router.get("/userProfile", userAuth, con.userProfileCon);

//logout path
router.get("/logOut", loginCon.logOutCon);

//blogAd
router.get("/blog_view", userAuth, blogCon.blogShowCon);
router.post("/blogShow", upload.single("imgPath") ,blogCon.blogDataCon);

//add comments
router.post("/addCommentCon", blogCon.addComentsCon);   

//myBlog
router.get("/myBlog", userAuth, myBlog.myBlogShowCon);

// myBlogEdit
router.get("/my_BlogEdit/:id", myBlog.myBlogEaditCon);
router.post("/my_BlogUpdate/:id", upload.single("imgPath"),myBlog.myBlogUpdateCon);

// myBlogDelete
router.get("/my_BlogDelete/:id", myBlog.myBlogDeleteCon);

// change password
router.get("/changePassForm", userAuth, changeCon.chanePassCon);
router.post("/changePassword", changeCon.changePasswordCon )

//forgotPass
router.get("/forgotPassForm", forgotCon.frogotPassConForm);
router.post("/forgotPassCon", forgotCon.forgotPassowrdCon);

//chack OPT
router.get("/chackOtpForm/:id", forgotCon.chackOPTConForm);
router.post("/chack_OTP/:id", forgotCon.chackOPTCon);

//reset Password
router.get("/resetPassForm/:id", forgotCon.resetPassFormCon);
router.post("/resetPassword/:id", forgotCon.resetPasswordCon);

// send email page /error page 
router.get("/sendMailMsg/:id", forgotCon.sendMailMsgCon);
router.get("/errorPage", forgotCon.errorPageCon);


// add topice
router.get("/add_TopicForm", addTopic.addToPic);
router.post("/addTopiceCon", addTopic.addTopic_Con);


//addsubtipics
router.get("/addSubTopicForm", addSubTopic.addSubToPicForm);
router.post("/addSubTopicCon", addSubTopic.addSubTopic_Con);

// delete subtopic
router.get("/deleteSubTopicForm/:id", addSubTopic.deleteSubTopic_Con);

// show topic and topics
router.get("/show_TopicseForm", addSubTopic.showTopics);




module.exports = router;