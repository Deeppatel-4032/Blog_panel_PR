
const loginFormCon = (req, res) => {
    res.render("login");
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