const perfil = {}
const sql = require("../configuracionBaseDeDatos/base.sql")
const orm = require("../configuracionBaseDeDatos/baseDatos.orm")

perfil.seleccion = async(req, res) => {
    const lista = await sql.query("SELECT * FROM info_cliente")
    res.render("perfiles/seleccionar", {lista});
}

perfil.seleccionar = async(req, res) => {
    const { id } = req.params;
    const cliente = await sql.query("SELECT * FROM info_cliente WHERE id=?", [id])
    const horario = await sql.query("SELECT * FROM horario WHERE id=?", [id])
    const menu = await sql.query("SELECT * FROM menu WHERE id=?", [id])
    const salud = await sql.query("SELECT * FROM salud WHERE id=?", [id])
    const instructor = await sql.query("SELECT * FROM entrenador WHERE id=?", [id])
    res.render("perfiles/perfiles", {cliente, horario, menu, salud, instructor});
}

module.exports = perfil