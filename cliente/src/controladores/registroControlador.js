const registro = {};

const passport = require('passport');

registro.mostrarRegistro = async(req, res) => {
    res.render('Usuario/Registro');
};

registro.Registro = passport.authenticate('local.signup', {
    successRedirect: '/CerrarSecion',
    failureRedirect: '/registro',
    failureFlash: true
});

registro.mostrarLogin = (req, res, next) => {
    res.render('Usuario/Login');
};

registro.Login = passport.authenticate('local.signin', {
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true
}); 

registro.cierreSesion = (req, res, next) => {
    req.logOut();
    res.redirect('/');
};

module.exports = registro;