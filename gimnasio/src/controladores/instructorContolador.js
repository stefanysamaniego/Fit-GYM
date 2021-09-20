const instructor = {}
const sql = require("../configuracionBaseDeDatos/base.sql")
const orm = require("../configuracionBaseDeDatos/baseDatos.orm")

instructor.mostrar = async(req, res) => {
    const lista = await sql.query("SELECT * FROM titulo")
    console.log(lista)
    res.render("instructor/agregar", {lista});
}

instructor.mandar = async(req, res) => {
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
        usuario: req.user.id
    }
    await orm.entrenador.create(nuevoEnvio)
    req.flash("success", "Se ha guardado con exito")
    res.redirect('/instructor/listar');
} 

instructor.listar = async(req, res) => {
    const lista = await sql.query("SELECT * FROM entrenador WHERE usuario=?", [req.user.id])
    res.render("instructor/listar", {lista});
}

instructor.traer = async(req, res) =>{
    const { id } = req.params
    const trae = await sql.query("SELECT * FROM entrenador WHERE id=?", [id])
    const lista = await sql.query("SELECT * FROM titulo")
    console.log(trae)
    res.render("instructor/editar", {encuentra: trae[0], lista})
}
 
instructor.editar = async(req, res) => {
    const { id } = req.params
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
        res.redirect('/instructor/listar');
    })
}

module.exports = instructor