const perfil = {}
const sql = require("../configuracionBaseDeDatos/base.sql")
const orm = require("../configuracionBaseDeDatos/baseDatos.orm")

perfil.seleccion = async(req, res) => {
    const lista = await sql.query("SELECT * FROM info_clientes")
    res.render("perfiles/seleccionar", {lista});
}

perfil.seleccionar = async(req, res) => {
    const id = req.params.id;
    const cliente = await sql.query("SELECT * FROM info_clientes WHERE idInfo_Cliente=?", [id])
    const horario = await sql.query("SELECT * FROM horarios WHERE idHorario=?", [id])
    const menu = await sql.query("SELECT * FROM menus WHERE idMenu=?", [id])
    const salud = await sql.query("SELECT * FROM saluds WHERE idSalud=?", [id])
    const instructor = await sql.query("SELECT * FROM entrenadores WHERE idEntrenador=?", [id])
    res.render("perfiles/perfiles", {cliente, horario, menu, salud, instructor});
}

module.exports = perfil