const passport = require("passport");

const registro = {} 

registro.visualizar = (req, res) => {
    res.render("registro/registro");
}

registro.autenticacion = passport.authenticate("local.signup", {
    successRedirect: "/gimnasio",
    failureRedirect: "/registro",
    failureFlash: true
})

registro.logear = (req, res) => {
    res.render("registro/login");
}

registro.autenticar = passport.authenticate("local.signin", {
    successRedirect: "/gimnasio",
    failureRedirect: "/login",
    failureFlash: true
})

registro.finalizar = (req, res) => {
    req.logOut()
    res.redirect('/');
}

module.exports = registro