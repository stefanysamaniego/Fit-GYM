const express = require('express');
const ruta = express.Router();

const {mostrar} = require("../controladores/menuControlador")

ruta.get("/menu", mostrar);

module.exports = ruta;