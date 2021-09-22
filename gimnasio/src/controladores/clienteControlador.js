const cliente = {}
const sql = require("../configuracionBaseDeDatos/base.sql");
const orm = require("../configuracionBaseDeDatos/baseDatos.orm");

cliente.mostrar = (req, res) => {
    res.render("cliente/agregar");
} 

cliente.mandar = async(req, res) => {
    const id = req.user.idUsuario
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
    res.redirect('/cliente/listar/' + id);
}

cliente.listar = async(req, res) => {
    const lista = await sql.query("SELECT * FROM info_clientes")
    res.render("cliente/listar", {lista});
}

cliente.traer = async(req, res) => {
    const id = req.params.id
    const trae = await sql.query("SELECT * FROM info_clientes WHERE idInfo_Cliente=?", [id])
    console.log(trae)
    res.render("cliente/editar", {trae});
}

cliente.editar = async(req, res) => {
    const usuario = req.user.idUsuario
    const id = req.params.id
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
        res.redirect('/cliente/listar/' + usuario);
    })
}

module.exports = cliente