const express = require('express');
const rutas = express.Router();

const { listar, listaDetalle } = require("../controladores/gimnasioControlador")

rutas.get("/", listar)

rutas.get("/detalleLista/:id", listaDetalle)

module.exports = rutas 