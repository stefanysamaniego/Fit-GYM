const horario = {}
const sql = require("../configuracionBaseDeDatos/base.sql")
const orm = require("../configuracionBaseDeDatos/baseDatos.orm")

horario.mostrar = (req, res) => {
    res.render("horario/agregar")
}

horario.mandar = async(req, res) => {
    const cliente = req.user.idUsuario
    const {dias, fechas, mes, horas} = req.body
    nuevoIngreso = {
        dias,
        fechas,
        mes,
        horas,
        infoClienteIdInfoCliente: cliente
    }
    await orm.horario.create(nuevoIngreso)
    req.flash("success", "Se ha agregado con exito")
    res.redirect('/horario/listar/' + cliente);
}

horario.listar = async(req, res) => {
    const usuario = req.user.idUsuario
    const trae = await sql.query("SELECT * FROM horarios WHERE idHorario=?", [usuario])
    res.render("cliente/listar", {trae});
}

horario.traer = async(req, res) => {
    const id = req.params.id
    const trae = await sql.query("SELECT * FROM horarios WHERE idHorario=?", [id])
    console.log(trae)
    res.render("horario/editar", {trae});
}

horario.editar = async(req, res) => {
    const usuario = req.user.idUsuario
    const id = req.params.id
    const {dias, fechas, mes, horas} = req.body
    const nuevoIngreso = {
        dias,
        fechas,
        mes,
        horas
    }
    await orm.horario.findOne({ where:{idHorario: id}})
    .then(horarios => {
        horarios.update(nuevoIngreso)
        req.flash("success", "Se ha agregado con exito")
        res.redirect('/horario/listar/' + usuario);
    })
}

module.exports = horario