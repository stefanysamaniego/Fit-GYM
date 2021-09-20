const salud = {}
const sql = require("../configuracionBaseDeDatos/base.sql")
const orm = require("../configuracionBaseDeDatos/baseDatos.orm")

salud.mostrar = (req, res) => {
    res.render("salud/agregar");
}

salud.mandar = async(req, res) => {
    const {lesion_ocia, lesion_muscular, enfermedad, vicios, embarazo, dificultades, actividad_deportiva, entidad} = req.body
    const nuevoEnvio = {
        lesion_ocia,
        lesion_muscular,
        enfermedad,
        vicios,
        embarazo,
        dificultades,
        actividad_deportiva,
        entidad,
        cliente: req.user.id,
        usuario: req.user.id
    }
    await orm.salud.create(nuevoEnvio)
    req.flash("success", "Se ha guardado con exito")
    res.redirect('/salud/listar');
}

salud.listar = async(req, res) => {
    const lista = await sql.query("SELECT * FROM salud WHERE id=?", [req.user.id])
    res.render("salud/listar", {lista});
}

salud.traer = async(req, res) =>{
    const { id } = req.params
    const trae = await sql.query("SELECT * FROM salud WHERE id=?", [id])
    console.log(trae)
    res.render("salud/editar", {encuentra: trae[0]})
}

salud.editar = async(req, res) => {
    const { id } = req.params
    const {lesion_ocia, lesion_muscular, enfermedad, vicios, embarazo, dificultades, actividad_deportiva, entidad} = req.body
    const nuevoEnvio = {
        lesion_ocia,
        lesion_muscular,
        enfermedad,
        vicios,
        embarazo,
        dificultades,
        actividad_deportiva,
        entidad
    }
    await orm.salud.findOne({ where: {idSalud: id}})
    .then(saluds =>{
        saluds.update(nuevoEnvio)
        req.flash("success", "Se ha guardado con exito")
        res.redirect('/salud/listar');
    })
}

module.exports = salud