const express = require('express');
const rutas = express.Router();

const { listar } = require("../controladores/perfilControlador");

const { isLogin } = require("../lib/auth")

rutas.get("/listar/:id", isLogin, listar)

module.exports = rutas