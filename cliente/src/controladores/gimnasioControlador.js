const listaGimnasios = {}
const sql = require("../configuracionBaseDeDatos/base.sql")
const orm = require("../configuracionBaseDeDatos/baseDatos.orm")

listaGimnasios.listar = async(req, res) => {
    const lista = await sql.query("SELECT * FROM gimnasios")
    res.render("gimnasio", {lista});
} 

listaGimnasios.listaDetalle = async(req, res) => {
    const id = req.params.id
    const lista = await sql.query("SELECT * FROM gimnasios WHERE idGimnasio=?", [id])
    res.render("gimnasio/listar", {lista});  
}

module.exports = listaGimnasios