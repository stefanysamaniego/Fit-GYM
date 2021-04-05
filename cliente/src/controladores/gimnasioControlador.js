const listaGimnasios = {}
const pool = require("../base")

listaGimnasios.listar = async(req, res) => {
    const lista = await pool.query("SELECT * FROM gimnasio")
    res.render("gimnasio", {lista});
}

module.exports = listaGimnasios