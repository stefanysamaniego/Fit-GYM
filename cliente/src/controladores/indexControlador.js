const index = {} //{} quiere decir areglo de varios metodos
//render nombre de vistas q voy a mostrar
//redirect nombre del acction q tiene la vista

index.mostrar = (req, res) => {
    res.render("index");
}

module.exports = index