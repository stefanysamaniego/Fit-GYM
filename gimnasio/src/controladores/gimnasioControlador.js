const gimnasio = {}
 
const pool = require("../configuracionBaseDeDatos/base.sql")

gimnasio.mostrar = (req, res) => {
    res.render("gimnasio/agregar");
}

//gimnasio.imagenAgregar = async(req, res) => {
//    const {nombre} = req.body
//    const nuevaImagen = {
//        nombre,
//        gimnasio: req.user.id
//    }
//    await pool.query("INSERT INTO imagenGimnasio SET ?", [nuevaImagen])
//    req.flash("success", "Se ha agregado con exito")
//     res.redirect('/gimnasio/listar');
//}

gimnasio.mandar = async(req, res) => {
    const {nombre, inscripcion, mensualidad, horario, bajas, higiene, seguridad, contacto, direccion, estado} = req.body
    const nuevoIngreso = {
        nombre,
        inscripcion,
        mensualidad,
        horario,
        bajas,
        higiene, 
        seguridad,
        contacto,
        direccion,
        estado,
        usuario: req.user.id
    }
    await pool.query("INSERT INTO gimnasio SET ?", [nuevoIngreso])
    req.flash("success", "Se ha agregado con exito")
    res.redirect('/gimnasio/listar');
}

gimnasio.listar = async(req, res) => {
    const lista = await pool.query("SELECT * FROM gimnasio WHERE usuario=?", [req.user.id])
    const listaImagen = await pool.query("SELECT * FROM imagenGimnasio WHERE gimnasio=?", [req.user.id])
    res.render("gimnasio/listar", {lista, listaImagen});
}

gimnasio.seleccionar = async(req, res) => {
    const cliente = await pool.query("SELECT * FROM info_cliente")
    const horario = await pool.query("SELECT * FROM horario")
    const menu = await pool.query("SELECT * FROM menu")
    const salud = await pool.query("SELECT * FROM salud")
    const instructor = await pool.query("SELECT * FROM entrenador")
    res.render("gimnasio/listaCliente", {cliente, horario, menu, salud, instructor});
}

gimnasio.traer = async(req, res) => {
    const { id } = req.params
    const trae = await pool.query("SELECT * FROM gimnasio WHERE id=?", [id])
    console.log(trae)
    res.render("gimnasio/editar", {encuentra: trae[0]});
}

gimnasio.editar = async(req, res) => {
    const { id } = req.params
    const {nombre, inscripcion, mensualidad, horario, bajas, higiene, seguridad, contacto, direccion, estado} = req.body
    const nuevoIngreso = {
        nombre,
        inscripcion,
        mensualidad,
        horario,
        bajas,
        higiene,
        seguridad,
        contacto,
        direccion,
        estado
    }
    await pool.query("UPDATE gimnasio SET ? WHERE id=?", [nuevoIngreso, id])
    req.flash("success", "Se ha actualizado con exito")
    res.redirect('/gimnasio/listar');
}

module.exports = gimnasio