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
    res.redirect('/menu/listar/' + usuario);
}

menu.listar = async(req, res) => {
    const usuario = req.user.idUsuario
    const lista = await sql.query("SELECT * FROM menus WHERE usuarioIdUsuario=?", [usuario])
    res.render("menu/listar", {lista});
}

menu.traer = async(req, res) =>{
    const id = req.params.id
    const trae = await sql.query("SELECT * FROM menus WHERE idMenu=?", [id])
    const lista = await sql.query("SELECT * FROM categorias")
    console.log(trae)
    res.render("menu/editar", {trae, lista})
}

menu.editar = async(req, res) => {
    const usuario = req.user.idUsuario
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
        res.redirect('/menu/listar/' + usuario);
    })
}

module.exports = menu