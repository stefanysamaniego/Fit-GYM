const menu = {}

menu.mostrar = async(req, res) => {
    res.render("menu/menuInicio");
}

module.exports = menu;