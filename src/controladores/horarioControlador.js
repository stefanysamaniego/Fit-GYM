const horario = {}
const pool = require("../base")

horario.mostrar = (req, res) => {
    res.render("horario.agregar")
}

horario.mandar = async(req, res) => {
    const {dias, fechas, horas} = req.body
    nuevoIngreso = {
        dias,
        fechas,
        horas,
        cliente: req.user.id
    }
    await pool.query("INSERT INTO horario SET ?", [nuevoIngreso])
    req.flash("success", "Se ha agregado con exito")
    res.redirect('/cliente/listar');
}

horario.listar = async(req, res) => {
    const trae = await pool.query("SELECT * FROM horario WHERE id=?", [req.user.id])
    res.render("cliente/listar", {lista});
}

horario.traer = async(req, res) => {
    const { id } = req.params
    const trae = await pool.query("SELECT * FROM horario WHERE id=?", [id])
    console.log(trae)
    res.render("horario/editar", {encuentra: trae[0]});
}

horario.editar = async(req, res) => {
    const { id } = req.params
    const {dias, fechas, horas} = req.body
    const nuevoIngreso = {
        dias,
        fechas,
        horas
    }
    await pool.query("INSERT INTO horario SET ?", [nuevoIngreso, id])
    req.flash("success", "Se ha agregado con exito")
    res.redirect('/cliente/listar');
}

module.exports = horario