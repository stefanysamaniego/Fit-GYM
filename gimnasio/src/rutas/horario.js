const express = require('express');
const rutas = express.Router()

const {isLogin} = require("../lib/auth")
const {mostrar, mandar, listar, traer, editar} = require("../controladores/horarioControlador")

rutas.get("/agregar/:id", isLogin, mostrar)
rutas.post("/agregar/:id", isLogin, mandar)

rutas.get("/listar/:id", isLogin, listar)

rutas.get("/editar/:id", isLogin, traer)
rutas.post("/editar/:id", isLogin, editar)

module.exports = rutas