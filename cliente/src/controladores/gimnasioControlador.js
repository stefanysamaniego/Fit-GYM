const listaGimnasios = {}
const pool = require("../base")

listaGimnasios.listar = async(req, res) => {
    const lista = await pool.query("SELECT * FROM gimnasio")
    res.render("gimnasio", {lista});
} 

listaGimnasios.listaDetalle = async(req, res) => {
    const {id} = req.params
    const lista = await pool.query("SELECT * FROM gimnasio WHERE id=?", [id])
    res.render("gimnasio/listar", {listar:lista[0]});  
}

module.exports = listaGimnasios