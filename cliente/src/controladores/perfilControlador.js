const listaPerfil = {}
const pool = require("../base")

listaPerfil.listar = (req,res) => {
    res.render("perfil/listar");
}

module.exports = listaPerfil