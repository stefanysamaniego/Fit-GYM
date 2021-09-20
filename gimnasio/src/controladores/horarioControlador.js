const horario = {}
const pool = require("../configuracionBaseDeDatos/base.sql")

horario.mostrar = (req, res) => {
    res.render("horario/agregar")
}

horario.mandar = async(req, res) => {
    const {dias, fechas, horas} = req.body
    nuevoIngreso = {
        dias,
        fechas,
        horas,
        cliente: req.user.id,
        usuario: req.user.id
    }
    await pool.query("INSERT INTO horario SET ?", [nuevoIngreso])
    req.flash("success", "Se ha agregado con exito")
    res.redirect('/horario/listar');
}

horario.listar = async(req, res) => {
    const lista = await pool.query("SELECT * FROM horario WHERE cliente=?", [req.user.id])
    res.render("horario/listar", {lista});
}

horario.traer = async(req, res) => {
    const { id } = req.params
    const trae = await pool.query("SELECT * FROM horario WHERE id=?", [id])
    console.log(trae)
    res.render("horario/editar", {encuentra: trae[0]});
}

horario.editar = async(req, res) => {
    const { id } = req.params
    const {dias, mes, horas} = req.body
    const nuevoIngreso = {
        dias,
        mes,
        horas
    }
    await pool.query("UPDATE horario SET ? WHERE id=?", [nuevoIngreso, id])
    req.flash("success", "Se ha agregado con exito")
    res.redirect('/horario/listar');
}

module.exports = horario