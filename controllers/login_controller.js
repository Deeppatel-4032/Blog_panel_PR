
const loginFormCon = (req, res) => {
  req.flash("loginMsg", "welcome to Login Form");
  res.render("login", {loginMsg : req.flash("loginMsg")});
}

const loginCon = (req, res) => {
 
    res.redirect("/")
}

const logOutCon = (req, res, next) => {
  
  req.logout((err) => {
    if (err) {
         next();
    }
    res.redirect("/loginForm")
  })
}

module.exports = { loginFormCon, loginCon, logOutCon }