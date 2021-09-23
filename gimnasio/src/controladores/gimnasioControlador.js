const gimnasio = {}
const sql = require("../configuracionBaseDeDatos/base.sql")
const orm = require("../configuracionBaseDeDatos/baseDatos.orm")

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
    const usuario = req.user.idUsuario
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
        usuarioIdUsuario: usuario
    }
    await orm.gimnasio.create(nuevoIngreso)
    req.flash("success", "Se ha agregado con exito")
    res.redirect('/gimnasio/listar/' + usuario);
}

gimnasio.listar = async(req, res) => {
    const usuario = req.user.idUsuario
    const lista = await sql.query("SELECT * FROM gimnasios WHERE usuarioIdUsuario=?", [usuario])
    const listaImagen = await sql.query("SELECT * FROM imagenGimnasios WHERE gimnasioIdGimnasio=?", [usuario])
    res.render("gimnasio/listar", {lista, listaImagen});
}

gimnasio.seleccionar = async(req, res) => {
    const cliente = await sql.query("SELECT * FROM info_clientes")
    const horario = await sql.query("SELECT * FROM horarios")
    const menu = await sql.query("SELECT * FROM menus")
    const salud = await sql.query("SELECT * FROM saluds")
    const instructor = await sql.query("SELECT * FROM entrenadores")
    res.render("gimnasio/listaCliente", {cliente, horario, menu, salud, instructor});
}

gimnasio.traer = async(req, res) => {
    const id = req.params.id
    const trae = await sql.query("SELECT * FROM gimnasios WHERE idGimnasio=?", [id])
    console.log(trae)
    res.render("gimnasio/editar", {trae});
}

gimnasio.editar = async(req, res) => {
    const id = req.params.id
    const usuario = req.user.idUsuario
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
    await orm.gimnasio.findOne({ where: {idGimnasio: id}})
    .then(gimnasios =>{
        gimnasios.update(nuevoIngreso)
        req.flash("success", "Se ha actualizado con exito")
        res.redirect('/gimnasio/listar/'+ usuario);
    })
    
}

module.exports = gimnasio