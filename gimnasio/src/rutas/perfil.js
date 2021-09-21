const express = require('express');
const rutas = express.Router()

const {seleccion, seleccionar} = require("../controladores/perfilControlador")

rutas.get("/seleccionar/:id", seleccion)

rutas.get("/perfil/:id", seleccionar)

module.exports = rutas