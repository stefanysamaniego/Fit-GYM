const perfil = {}
const pool = require("../base");

perfil.seleccion = async(req, res) => {
    const lista = await pool.query("SELECT * FROM info_cliente")
    res.render("perfiles/seleccionar", {lista});
}

perfil.seleccionar = async(req, res) => {
    const { id } = req.params;
    const cliente = await pool.query("SELECT * FROM info_cliente WHERE id=?", [id])
    const horario = await pool.query("SELECT * FROM horario WHERE id=?", [id])
    const menu = await pool.query("SELECT * FROM menu WHERE id=?", [id])
    const salud = await pool.query("SELECT * FROM salud WHERE id=?", [id])
    const instructor = await pool.query("SELECT * FROM entrenador WHERE id=?", [id])
    res.render("perfiles/perfiles", {cliente, horario, menu, salud, instructor});
}

module.exports = perfil