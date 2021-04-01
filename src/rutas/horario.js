const express = require('express');
const rutas = express.Router()

const {mostrar, mandar, listar, traer, editar} = require("../controladores/horarioControlador")

rutas.get("/agregar", mostrar)
rutas.post("/agregar", mandar)

rutas.get("/listar", listar)

rutas.get("/editar/:id", traer)
rutas.post("/editar/:id", editar)

module.exports = rutas