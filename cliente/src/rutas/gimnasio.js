const express = require('express');
const rutas = express.Router();

const{listar} = require("../controladores/gimnasioControlador")

rutas.get("/gimnasio", listar)

module.exports = rutas