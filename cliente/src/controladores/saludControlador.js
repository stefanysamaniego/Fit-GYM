const salud = {}
const sql = require("../configuracionBaseDeDatos/base.sql")
const orm = require("../configuracionBaseDeDatos/baseDatos.orm")

salud.mostrar = (req, res) => {
    res.render("salud/agregar");
}

salud.mandar = async(req, res) => {
    const cliente = req.user.idUsuario
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
        infoClienteInfoCliente: cliente
    }
    await orm.salud.create(nuevoEnvio)
    req.flash("success", "Se ha guardado con exito")
    res.redirect('/salud/listar/'+ cliente);
}

salud.listar = async(req, res) => {
    const usuario = req.user.idUsuario
    const lista = await sql.query("SELECT * FROM saluds WHERE idSalud=?", [usuario])
    res.render("salud/listar", {lista});
}

salud.traer = async(req, res) =>{
    const { id } = req.params
    const trae = await sql.query("SELECT * FROM saluds WHERE idSalud=?", [id])
    console.log(trae)
    res.render("salud/editar", {trae})
}

salud.editar = async(req, res) => {
    const id = req.params.id
    const usuario = req.user.idUsuario
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
        res.redirect('/salud/listar/'+ usuario);
    })}

module.exports = salud