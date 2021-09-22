const instructor = {}
const sql = require("../configuracionBaseDeDatos/base.sql")
const orm = require("../configuracionBaseDeDatos/baseDatos.orm")

instructor.mostrar = async(req, res) => {
    const lista = await sql.query("SELECT * FROM titulos")
    console.log(lista)
    res.render("instructor/agregar", {lista});
}

instructor.mandar = async(req, res) => {
    const usuario = req.user.idUsuario
    const {nombres, apellidos, cedula, edad, telefono, titulo, añosExperiencia, descripcion} = req.body
    const nuevoEnvio = {
        nombres,
        apellidos,
        cedula,
        edad,
        telefono,
        titulo,
        añosExperiencia,
        descripcion,  
        usuarioIdUsuario: usuario
    }
    await orm.entrenador.create(nuevoEnvio)
    req.flash("success", "Se ha guardado con exito")
    res.redirect('/instructor/listar'+ usuario);
} 

instructor.listar = async(req, res) => {
    const usuario = req.user.idUsuario
    const lista = await sql.query("SELECT * FROM entrenadores WHERE usuarioIdUsuario=?", [usuario])
    res.render("instructor/listar", {lista});
}

instructor.traer = async(req, res) =>{
    const id = req.params.id
    const trae = await sql.query("SELECT * FROM entrenadores WHERE idEntrenador=?", [id])
    const lista = await sql.query("SELECT * FROM titulos")
    console.log(trae)
    res.render("instructor/editar", {trae, lista})
}
 
instructor.editar = async(req, res) => {
    const id = req.params.id
    const usuario = req.user.idUsuario
    const {nombres, apellidos, cedula, edad, telefono, titulo, añosExperiencia, descripcion} = req.body
    const nuevoEnvio = {
        nombres,
        apellidos,
        cedula,
        edad,
        telefono,
        titulo,
        añosExperiencia,
        descripcion
    }
    await orm.entrenador.findOne({ where: {idEntrenador: id}})
    .then(entrenadores =>{
        entrenadores.update(nuevoEnvio)
        req.flash("success", "Se ha guardado con exito")
        res.redirect('/instructor/listar'+usuario);
    })
}

module.exports = instructor