const menu = {}
const pool = require("../base")

menu.mostrar = async(req, res) => {
    const lista = await pool.query("SELECT * FROM categoria")
    res.render("menu/agregar", {lista});
}

menu.mandar = async(req, res) => {
    const {nombre, descripcion, dias, semanas, categoria} = req.body
    const nuevoEnvia = {
        nombre,
        descripcion,
        dias,
        semanas,
        categoria,
        usuario: req.user.id
    }
    await pool.query("INSERT INTO menu SET ?", [nuevoEnvia])
    req.flash("success", "Se ha guardado con exito")
    res.redirect('/menu/listar');
}

menu.listar = async(req, res) => {
    const lista = await pool.query("SELECT * FROM menu WHERE usuario=?", [req.user.id])
    res.render("menu/listar", {lista});
}

menu.traer = async(req, res) =>{
    const { id } = req.params
    const trae = await pool.query("SELECT * FROM menu WHERE id=?", [id])
    const lista = await pool.query("SELECT * FROM categoria")
    console.log(trae)
    res.render("menu/editar", {encuentra: trae[0], lista})
}

menu.editar = async(req, res) => {
    const { id } = req.params
    const {nombre, descripcion, dias, semanas, categoria} = req.body
    const nuevoEnvia = {
        nombre,
        descripcion,
        dias,
        semanas,
        categoria
    }
    await pool.query("UPDATE menu SET ? WHERE id=?", [nuevoEnvia, id])
    req.flash("success", "Se ha guardado con exito")
    res.redirect('/menu/listar');
}

module.exports = menu