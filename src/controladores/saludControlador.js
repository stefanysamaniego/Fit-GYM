const salud = {}
const pool = require("../base")

salud.mostrar = (req, res) => {
    res.render("salud/agregar");
}

salud.mandar = async(req, res) => {
    const {lesion_ocia, lesion_muscular, enfermedad, vicios, embarazo, dificultades, actividad_deportiva, entidad} = req.body
    const nuevoEnvia = {
        lesion_ocia,
        lesion_muscular,
        enfermedad,
        vicios,
        embarazo,
        dificultades,
        actividad_deportiva,
        entidad,
        cliente: req.user.id
    }
    await pool.query("INSERT INTO salud SET ?", [nuevoEnvia])
    req.falsh("success", "Se ha guardado con exito")
    res.redirect('/salud/listar');
}

salud.listar = async(req, res) => {
    const lista = await pool.query("SELECT * FROM salud WHERE id=?", [req.user.id])
    res.render("salud/listar", {lista});
}

salud.traer = async(req, res) =>{
    const { id } = req.params
    const trae = await pool.query("SELECT * FROM salud WHERE id=?", [id])
    console.log(trae)
    res.render("salud/editar", {encuentra: trae[0]})
}

salud.editar = async(req, res) => {
    const {lesion_ocia, lesion_muscular, enfermedad, vicios, embarazo, dificultades, actividad_deportiva, entidad} = req.body
    const nuevoEnvia = {
        lesion_ocia,
        lesion_muscular,
        enfermedad,
        vicios,
        embarazo,
        dificultades,
        actividad_deportiva,
        entidad
    }
    await pool.query("UPDATE salud SET ? WHERE id=?", [nuevoEnvia, id])
    req.falsh("success", "Se ha guardado con exito")
    res.redirect('/salud/listar');
}

module.exports = salud