const express = require('express');

const rutas = express.Router()

const { mostrar } = require("../controladores/loginControlador")

const { isLogin } = require("../lib/auth") 

rutas.get("/gimnasio", isLogin, mostrar)

module.exports = rutas