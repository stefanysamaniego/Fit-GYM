const entrenadores = {}

entrenadores.mostrar = async(req, res) => {
    res.render("entrenadores/entrenadoresInicio");
}

module.exports = entrenadores;