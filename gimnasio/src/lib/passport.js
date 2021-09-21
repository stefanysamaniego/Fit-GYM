const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const pool = require("../configuracionBaseDeDatos/baseDatos.orm");
const helpers = require("./helpers");

// metodo de logeo 
passport.use(
    "local.signin",
    new LocalStrategy({ 
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true,
    },
    async (req, username, password, done) => {
        const rows = await pool.usuario.findOne({where: {username: username}});
        if (rows) {
            const user = rows;
            const validPassword = await helpers.desencriptacion(
            password,
            user.password
            );
            if (validPassword) {
                done(null, user, req.flash("message", "Bienvenid@ " + user.username + " " +"¡¡Gracias por Elegirnos!!"));
            } else {
                done(null, false, req.flash("message", "Datos incorrecta"));
            }
        } else {
            return done(
                null,
                false,
                req.flash("message", "El nombre de usuario no existe.")
            );
        }
    })
);

//metodo de registro
passport.use(
    "local.signup",
    new LocalStrategy(
    {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true,
    },
    async (req, username, password, done) => {
        const usuarios = await pool.usuario.findOne({where: {username: username}});
        if(usuarios === null){
            const { email } = req.body;
            let nuevoUsuario = {
                username,
                password,
                email,
            };
            nuevoUsuario.password = await helpers.encriptacion(password);
            const resultado = await pool.usuario.create(nuevoUsuario);
            nuevoUsuario.id = resultado.insertId;
            return done(null, nuevoUsuario);   
        } else{
            if(usuarios){
                const usuario = usuarios
            }
            if(username = usuario.username){
                done(null, false, req.flash('message', 'El nombre de usuario ya existe'))
            } else{
                const { email } = req.body;
            let nuevoUsuario = {
                username,
                password,
                email,
            };
            nuevoUsuario.password = await helpers.encriptacion(password);
            const resultado = await pool.usuario.create(nuevoUsuario);
            nuevoUsuario.id = resultado.insertId;
            return done(null, nuevoUsuario);
            }
        }
    }
  )
);

//metodo para serializar el usuario
passport.serializeUser((user, done) => {
    done(null, user);
});

//metodo para serializar el usuario
passport.deserializeUser(async (user, done) => {
    done(null, user);
});