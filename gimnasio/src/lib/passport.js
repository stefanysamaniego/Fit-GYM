const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const orm = require('../configuracionBaseDeDatos/baseDatos.orm')
const helpers = require("./helpers");

passport.use(
    "local.signin",
    new LocalStrategy(
        {
            usernameField: "username",
            passwordField: "password",
            passReqToCallback: true
        },
        async (req, username, password, done) => {
            const rows = await orm.usuario.findOne({ where: { username: username } });
            if (rows) {
                const user = rows;
                const validPassword = await helpers.desencriptacion(
                    password,
                    user.password
                );
                if (validPassword) {
                    done(null, user, req.flash("message", "Bienvenido" + " " + user.username));
                } else {
                    done(null, false, req.flash("message", "Datos incorrecta"));
                }
            } else {
                return done(
                    null,
                    false,
                    req.flash("message", "El correo electrónico no existe.")
                );
            }
        }
    )
);

passport.use(
    "local.signup",
    new LocalStrategy(
        {
            usernameField: "username",
            passwordField: "password",
            passReqToCallback: true
        },
        async (req, username, password, done) => {
            const usuarios = await orm.usuario.findOne({ where: { username: username } });
            if (usuarios === null) {
                const { nombres, apellidos } = req.body
                let nuevoUsuario = {
                    nombres,
                    apellidos,
                    username,
                    password
                };
                nuevoUsuario.password = await helpers.encriptacion(password);
                const resultado = await orm.usuario.create(nuevoUsuario);
                nuevoUsuario.id = resultado.insertId;
                return done(null, nuevoUsuario);
            } else {
                if (usuarios) {
                    const usuario = usuarios
                    if (username == usuario.username) {
                        done(null, false, req.flash("message", "El correo electrónico ya existe."))
                    } else {
                        const { nombres, apellidos } = req.body
                        let nuevoUsuario = {
                            nombres,
                            apellidos,
                            username,
                            password
                        };
                        nuevoUsuario.password = await helpers.encriptacion(password);
                        const resultado = await orm.usuario.create(nuevoUsuario);
                        nuevoUsuario.id = resultado.insertId;
                        return done(null, nuevoUsuario);
                    }
                }
            }
        }
    )
);

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});