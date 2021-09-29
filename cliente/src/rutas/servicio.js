const express = require('express');
const ruta = express.Router();

const {mostrar} = require("../controladores/serviciosControlador")

ruta.get("/servicio", mostrar);

module.exports = ruta;