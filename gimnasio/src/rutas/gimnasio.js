const express = require('express');
const rutas = express.Router()

const {isLogin} = require("../lib/auth")
const {mostrar, mandar, listar, traer, editar, imagenAgregar} = require("../controladores/gimnasioControlador")

rutas.get("/agregar", isLogin, mostrar)
rutas.post("/agregar", isLogin, mandar)
 
rutas.get("/listar", isLogin, listar)
rutas.post("/listar", isLogin, imagenAgregar)

rutas.get("/editar/:id", isLogin, traer)
rutas.post("/editar/:id", isLogin, editar)

module.exports = rutas
