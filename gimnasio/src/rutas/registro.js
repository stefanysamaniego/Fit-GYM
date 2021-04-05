const express = require('express'); 

const rutas = express.Router()

const { visualizar, autenticacion, logear, autenticar, finalizar } = require("../controladores/registroControlador")

rutas.get("/registro", visualizar)
rutas.post("/registro", autenticacion)

rutas.get("/login", logear)
rutas.post("/login", autenticar)

rutas.get("/finalizar", finalizar)

module.exports = rutas 