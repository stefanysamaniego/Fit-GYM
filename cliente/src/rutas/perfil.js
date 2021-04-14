const express = require('express');
const rutas = express.Router();

const { listar } = require("../controladores/perfilControlador");

rutas.get("/listar", listar)

module.exports = rutas