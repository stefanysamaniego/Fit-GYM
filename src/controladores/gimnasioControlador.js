const gimnasio = {}
const pool = require("../base")

gimnasio.mostrar = (req, res) => {
    res.render("gimnasio/agregar");
} 

gimnasio.mandar = async(req, res) => {
    const {inscripcion, mensualidad, horario, bajas, higiene, seguridad} = req.body
    const nuevoIngreso = {
        inscripcion,
        mensualidad,
        horario,
        bajas,
        higiene,
        seguridad,
        usuario: req.user.id
    }
    await pool.query("INSERT INTO gimnasio SET ?", [nuevoIngreso])
    req.flash("success", "Se ha agregado con exito")
    res.redirect('/gimnasio/listar');
}

gimnasio.listar = async(req, res) => {
    const lista = await pool.query("SELECT * FROM gimnasio WHERE id=?", [req.user.id])
    res.render("gimnasio/listar", {lista});
}

gimnasio.traer = async(req, res) => {
    const { id } = req.params
    const trae = await pool.query("SELECT * FROM gimnasio WHERE id=?", [id])
    console.log(trae)
    res.render("gimnasio/editar", {encuentra: trae[0]});
}

gimnasio.editar = async(req, res) => {
    const { id } = req.params
    const {inscripcion, mensualidad, horario, bajas, higiene, seguridad} = req.body
    const nuevoIngreso = {
        inscripcion,
        mensualidad,
        horario,
        bajas,
        higiene,
        seguridad 
    }
    await pool.query("UPDATE gimnasio SET ? WHERE id=?", [nuevoIngreso, id])
    req.flash("success", "Se ha actualizado con exito")
    res.redirect('/gimnasio/listar');
}

module.exports = gimnasio