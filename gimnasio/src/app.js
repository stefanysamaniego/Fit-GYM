const express = require("express")
const morgan = require("morgan")
const path = require("path")
const exphbs = require("express-handlebars")
const session = require("express-session")
const passport = require("passport")
const flash = require("connect-flash")
const mysqlstore = require("express-mysql-session")(session)
const bodyparser = require("body-parser")
 
const { database } = require("./keys")

const app = express()
require("./lib/passport")

app.set("port", process.envPORT || 4000)
app.set("views", path.join(__dirname, "vistas"))
app.engine(".hbs", exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require("./lib/helpers")
}))

app.set("view engine", ".hbs")

app.use(morgan("dev"))
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(session({
    secret: "Hola Stefany",
    resave: false,
    saveUninitialized: false,
    store: new mysqlstore(database)
}))

app.use(flash())
app.use(passport.initialize()) 
app.use(passport.session())

app.use((req, res, next) => {
    app.locals.message = req.flash("message")
    app.locals.success = req.flash("success")
    app.locals.user = req.user
    next()
})

app.use(express.static(path.join(__dirname, "public")))

//aqui rutas
app.use(require("./rutas/index"));
app.use(require("./rutas/login"));
app.use(require("./rutas/registro"));
app.use("/gimnasio", require("./rutas/gimnasio"))
app.use("/cliente", require("./rutas/cliente"))
app.use("/horario", require("./rutas/horario"))
app.use("/salud", require("./rutas/salud")) 
app.use("/instructor", require("./rutas/instructor"))
app.use("/menu", require("./rutas/menu"))

module.exports = app