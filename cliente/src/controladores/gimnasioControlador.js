const gimnasio = {}

gimnasio.mostrar = async(req, res) => {
    res.render("gimnasio/gimnasioInicio");
}

module.exports = gimnasio;