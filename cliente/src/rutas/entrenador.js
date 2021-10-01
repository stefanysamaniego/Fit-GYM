const express = require('express');
const ruta = express.Router();

const {mostrar} = require("../controladores/entrenadorControlador")

ruta.get("/entrenador", mostrar);

module.exports = ruta;