const listaGimnasios = {}
const sql = require("../configuracionBaseDeDatos/base.sql")
const orm = require("../configuracionBaseDeDatos/baseDatos.orm")

listaGimnasios.listar = async(req, res) => {
    const lista = await sql.query("SELECT * FROM gimnasio")
    res.render("gimnasio", {lista});
} 

listaGimnasios.listaDetalle = async(req, res) => {
    const {id} = req.params
    const lista = await sql.query("SELECT * FROM gimnasio WHERE idGimnasio=?", [id])
    res.render("gimnasio/listar", {lista});  
}

module.exports = listaGimnasios