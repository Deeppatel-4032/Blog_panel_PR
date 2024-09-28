
const userDefaultCon = (req, res) => {
    
    if(req.isAuthenticated()) {    
        res.render("index");
    } else {
        res.redirect("loginForm");
    }
}

module.exports = { userDefaultCon }