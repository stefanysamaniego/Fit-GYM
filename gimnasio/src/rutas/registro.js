const express = require('express'); 

const rutas = express.Router()

const { validacion, validar, visualizar, autenticacion, logear, autenticar, finalizar, actualizacion, actualizar } = require("../controladores/registroControlador")

rutas.get("/registro", visualizar)
rutas.post("/registro", autenticacion)

rutas.get("/login/:id", logear)
rutas.post("/login/:id", autenticar)

rutas.get("/validacion", validacion)
rutas.post("/validacion", validar)

rutas.get("/actualizar/:id", actualizacion)
rutas.post("/actualizar/:id", actualizar)

rutas.get("/finalizar", finalizar)

module.exports = rutas