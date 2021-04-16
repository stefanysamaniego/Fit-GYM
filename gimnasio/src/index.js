const dotenv = require("dotenv")
dotenv.config()

const app = require("./app")
app.listen(app.get("port"))
console.log("El puerto esta corriendo en: ", app.get("port"))