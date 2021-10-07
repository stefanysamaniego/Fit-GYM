const passport = require("passport");
const orm = require("../configuracionBaseDeDatos/baseDatos.orm")
const sql = require("../configuracionBaseDeDatos/base.sql")
const helpers = require("../lib/helpers")
const registro = {}

registro.visualizar = (req, res) => {
    res.render("registro/registro");
}

registro.autenticacion = passport.authenticate("local.signup", {
    successRedirect: "/finalizar",
    failureRedirect: "/registro",
    failureFlash: true
}) 

registro.logear = async(req, res) => {
    const id = req.params.id;
    const trae = await sql.query('SELECT * FROM usuarios WHERE idUsuario= ?',[id])
    res.render("registro/login", {trae});
}

registro.autenticar = passport.authenticate("local.signin", {
    successRedirect: "/inicio",
    failureRedirect: "/validacion",
    failureFlash: true
})

registro.validacion = (req, res) => {
    res.render('registro/validacion');
}

registro.validar = async(req, res) =>{
    const {username} = req.body
    const verificacion = await orm.usuario.findOne({where: {username: username}})
    if(verificacion){
        const user = verificacion
        if(user.username === null || user.password === null){
            req.flash('message', 'El correo electrónico no exite');
        }else{
            res.redirect('/login/' + user.idUsuario);
        }
    }else{
        res.redirect('/registro');
    }
}

registro.actualizacion = async(req, res) => {
    const id = req.params.id;
    const trae = await sql.query('SELECT * FROM usuarios WHERE idUsuario= ?',[id])
    res.render('registro/actualizacion', {trae});
}

registro.actualizar = async(req, res) => {
    const id = req.params.id;
    const {password} = req.body
    const nuevoEnvio = {password}
    nuevoEnvio.password = await helpers.encriptacion(password)
    await orm.usuario.findOne({where: {idUsuario: id}})
        .then(usuarios => {
            usuarios.update(nuevoEnvio)
            req.flash('success', 'Se actualizo correctamente la contraseña')
            res.redirect('/login/' + id);
        })
}

registro.finalizar = (req, res) => {
    req.logOut()
    res.redirect('/');
}

module.exports = registro