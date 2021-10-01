const express = require('express');
const ruta = express.Router();

const {mostrar} = require("../controladores/entrenadoresControlador")

ruta.get("/entrenadores", mostrar);

module.exports = ruta;