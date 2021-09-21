const cliente = {}
const sql = require("../configuracionBaseDeDatos/base.sql");
const orm = require("../configuracionBaseDeDatos/baseDatos.orm");

cliente.mostrar = (req, res) => {
    res.render("cliente/agregar");
} 

cliente.mandar = async(req, res) => {
    const { nombres, apellidos, cedula, edad, telefono, altura, peso} = req.body
    const nuevoEnvio = {
        nombres,
        apellidos,
        cedula,
        edad,
        telefono,
        altura,
        peso
    }
    await orm.info_cliente.create(nuevoEnvio)
    req.flash("success", "Se ha agregado con exito")
    res.redirect('/cliente/listar');
}

cliente.listar = async(req, res) => {
    const lista = await sql.query("SELECT * FROM info_cliente")
    res.render("cliente/listar", {lista});
}

cliente.traer = async(req, res) => {
    const { id } = req.params
    const trae = await sql.query("SELECT * FROM info_cliente WHERE id=?", [id])
    console.log(trae)
    res.render("cliente/editar", {encuentra: trae[0]});
}

cliente.editar = async(req, res) => {
    const { id } = req.params
    const {nombres, apellidos, cedula, edad, telefono, altura, peso} = req.body
    const nuevoEnvio = {
        nombres,
        apellidos,
        cedula,
        edad,
        telefono,
        altura,
        peso
    }
    await orm.info_cliente.findOne({ where: {idInfo_Cliente: id}})
    .then(clientes =>{
        clientes.update(nuevoEnvio)
        req.flash("success", "Se ha actualizado con exito")
        res.redirect('/cliente/listar');
    })
}

module.exports = cliente