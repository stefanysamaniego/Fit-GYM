const listaPerfil = {}
const pool = require("../configuracionBaseDeDatos/base.sql");

listaPerfil.listar = (req, res) => {
    res.render("perfil/listar"); 
}

module.exports = listaPerfil