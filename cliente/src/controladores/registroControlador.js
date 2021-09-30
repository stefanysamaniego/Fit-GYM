const registro = {};

const passport = require('passport');

registro.mostrarRegistro = async(req, res) => {
    res.render('usuario/registro');
};

registro.Registro = passport.authenticate('local.signup', {
    successRedirect: '/CerrarSecion',
    failureRedirect: '/registro',
    failureFlash: true
});

registro.mostrarLogin = (req, res, next) => {
    res.render('usuario/login');
};

registro.Login = passport.authenticate('local.signin', {
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true
}); 

registro.actualizacion = (req, res) => {
    res.render('usuario/actualizacion');
}

registro.cierreSesion = (req, res, next) => {
    req.logOut();
    res.redirect('/');
};

module.exports = registro;
