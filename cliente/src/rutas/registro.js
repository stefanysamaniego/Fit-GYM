const express = require('express');
const rutas = express.Router();

const { mostrarLogin, mostrarRegistro, Registro, Login, cierreSesion } = require('../Controladores/registroControlador')


rutas.get('/registro', mostrarRegistro);
rutas.post('/registro', Registro);


rutas.get('/login', mostrarLogin);
rutas.post('/login', Login);

rutas.get('/CerrarSecion', cierreSesion);

module.exports = rutas;