const menu = {}
const sql = require("../configuracionBaseDeDatos/base.sql")
const orm = require("../configuracionBaseDeDatos/baseDatos.orm")

menu.mostrar = async(req, res) => {
    const lista = await sql.query("SELECT * FROM categorias")
    res.render("menu/agregar", {lista});
}

menu.mandar = async(req, res) => {
    const usuario = req.user.idUsuario
    const {nombre, descripcion, dias, semanas, categoria} = req.body
    const nuevoEnvio = {
        nombre,
        descripcion,
        dias,
        semanas,
        categoria,
        usuarioIdUsuario: usuario
    }
    await orm.menu.create(nuevoEnvio)
    req.flash("success", "Se ha guardado con exito")
    res.redirect('/menu/listar');
}

menu.listar = async(req, res) => {
    const usuario = req.user.idUsuario
    const lista = await sql.query("SELECT * FROM menu WHERE usuario=?", [usuario])
    res.render("menu/listar", {lista});
}

menu.traer = async(req, res) =>{
    const id = req.params.id
    const trae = await sql.query("SELECT * FROM menu WHERE id=?", [id])
    const lista = await sql.query("SELECT * FROM categoria")
    console.log(trae)
    res.render("menu/editar", {encuentra: trae[0], lista})
}

menu.editar = async(req, res) => {
    const id = req.params.id
    const {nombre, descripcion, dias, semanas, categoria} = req.body
    const nuevoEnvio = {
        nombre,
        descripcion,
        dias,
        semanas,
        categoria
    }
    await orm.menu.findOne({ where: {idMenu: id}})
    .then(menus =>{
        menus.update(nuevoEnvio)
        req.flash("success", "Se ha guardado con exito")
        res.redirect('/menu/listar');
    })
}

module.exports = menu