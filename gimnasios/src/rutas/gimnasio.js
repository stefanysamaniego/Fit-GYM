const express = require('express'); 
const rutas = express.Router()

const {mostrar, mandar, listar, traer, editar, seleccionar} = require("../controladores/gimnasioControlador")
const {isLogin} = require("../lib/auth")

rutas.get("/agregar", isLogin, mostrar)
rutas.post("/agregar", isLogin, mandar)
 
rutas.get("/listar", isLogin, listar)
rutas.get("/listaCliente", isLogin, seleccionar) 

rutas.get("/editar/:id", isLogin, traer)
rutas.post("/editar/:id", isLogin, editar)

module.exports = rutas