const instructor = {}
const pool = require("../base")

instructor.mostrar = async(req, res) => {
    const lista = await pool.query("SELECT * FROM titulo")
    console.log(lista)
    res.render("instructor/agregar", {lista});
}

instructor.mandar = async(req, res) => {
    const {nombres, apellidos, cedula, edad, telefono, titulo, añosExperiencia, descripcion} = req.body
    const nuevoEnvia = {
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
    await pool.query("INSERT INTO entrenador SET ?", [nuevoEnvia])
    req.flash("success", "Se ha guardado con exito")
    res.redirect('/instructor/listar');
} 

instructor.listar = async(req, res) => {
    const lista = await pool.query("SELECT * FROM entrenador WHERE usuario=?", [req.user.id])
    res.render("instructor/listar", {lista});
}

instructor.traer = async(req, res) =>{
    const { id } = req.params
    const trae = await pool.query("SELECT * FROM entrenador WHERE id=?", [id])
    const lista = await pool.query("SELECT * FROM titulo")
    console.log(trae)
    res.render("instructor/editar", {encuentra: trae[0], lista})
}
 
instructor.editar = async(req, res) => {
    const { id } = req.params
    const {nombres, apellidos, cedula, edad, telefono, titulo, añosExperiencia, descripcion} = req.body
    const nuevoEnvia = {
        nombres,
        apellidos,
        cedula,
        edad,
        telefono,
        titulo,
        añosExperiencia,
        descripcion
    }
    await pool.query("UPDATE entrenador SET ? WHERE id=?", [nuevoEnvia, id])
    req.flash("success", "Se ha guardado con exito")
    res.redirect('/instructor/listar');
}

module.exports = instructor