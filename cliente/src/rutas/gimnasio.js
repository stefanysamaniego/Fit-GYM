const express = require('express');
const ruta = express.Router();

const {mostrar} = require("../controladores/gimnasioControlador")

ruta.get("/gimnasio", mostrar);

module.exports = ruta;