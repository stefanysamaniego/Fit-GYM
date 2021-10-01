const entrenador = {}

entrenador.mostrar = async(req, res) => {
    res.render("entrenador/entrenadorInicio");
}

module.exports = entrenador;