const servicio = {}

servicio.mostrar = async(req, res) => {
    res.render("servicio/servicioInicio");
}

module.exports = servicio;