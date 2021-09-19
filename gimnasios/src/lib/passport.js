const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const pool = require("../base");
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
        const rows = await pool.query("SELECT * FROM usuario WHERE username=?", [username]);
        if (rows.length > 0) {
            const user = rows[0];
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
        const { email } = req.body;
        let nuevoUsuario = {
            username,
            password,
            email,
        };
        nuevoUsuario.password = await helpers.encriptacion(password);
        const resultado = await pool.query(
            "INSERT INTO usuario SET ?",
            nuevoUsuario
        );
        nuevoUsuario.id = resultado.insertId;
        return done(null, nuevoUsuario);
    }
  )
);

//metodo para serializar el usuario
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//metodo para serializar el usuario
passport.deserializeUser(async (id, done) => {
    const rows = await pool.query("SELECT * FROM usuario WHERE id = ?", [id]);
    done(null, rows[0]);
});