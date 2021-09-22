const express = require('express');
 
const rutas = express.Router()

const {mostrar, mandar} = require("../controladores/indexControlador")

rutas.get("/", mostrar)
rutas.post("/", mandar)

module.exports = rutas