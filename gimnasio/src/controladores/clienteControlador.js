const cliente = {}
const { restart } = require("nodemon");
const pool = require("../base")

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
        peso,
        usuario: req.user.id
    }
    await pool.query("INSERT INTO info_cliente SET ?", [nuevoEnvio])
    req.flash("success", "Se ha agregado con exito")
    res.redirect('/cliente/listar');
}

cliente.listar = async(req, res) => {
    const lista = await pool.query("SELECT * FROM info_cliente WHERE id=?", [req.user.id])
    res.render("cliente/listar", {lista});
}

cliente.traer = async(req, res) => {
    const { id } = req.params
    const trae = await pool.query("SELECT * FROM info_cliente WHERE id=?", [id])
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
    await pool.query("UPDATE info_cliente SET ? WHERE id=?", [nuevoEnvio, id])
    req.flash("success", "Se ha actualizado con exito")
    res.redirect('/cliente/listar');
}

module.exports = cliente