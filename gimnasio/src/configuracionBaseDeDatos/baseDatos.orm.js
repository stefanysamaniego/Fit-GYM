const Sequelize = require('sequelize');
const mysql = require('mysql2/promise');

const devName = process.env.DB_SCHEMAS || 'fitGym'

mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || '3306',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || ''
}).then( connection => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${devName};`).then((res) => {
        console.info("Base de Datos se ha creado u comprobado correctamente")
    })
})

const usuarioModelo = require('../modelos/usuario');
const usuario_clienteModelo = require('../modelos/usuario_cliente');
const tituloModelo = require('../modelos/titulo');
const saludModelo = require('../modelos/salud');
const menuModelo = require('../modelos/menu');
const info_clienteModelo = require('../modelos/info_cliente');
const imagenMenuModelo = require('../modelos/imagenMenu');
const imagenGimnasioModelo = require('../modelos/imagenGimnasio');
const horarioModelo = require('../modelos/horario');
const gimnasioModelo = require('../modelos/gimnasio');
const entrenadorModelo = require('../modelos/entrenador');
const categoriaModelo = require('../modelos/categoria');  

const sequelize = new Sequelize (
    'fitGym',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        }
    }
)

sequelize.authenticate()
.then( ()=>{
    console.log('Base de Datos conectada');
})
.catch(err =>{
    console.log('Base de Datos no conectada');
})

sequelize.sync({ force: false})
.then( ()=>{
    console.log('Tablas sincronidadas');
})

const usuario = usuarioModelo(sequelize, Sequelize);
const usuario_cliente = usuario_clienteModelo(sequelize, Sequelize);
const titulo = tituloModelo(sequelize, Sequelize);
const salud = saludModelo(sequelize, Sequelize);
const menu = menuModelo(sequelize, Sequelize);
const info_cliente = info_clienteModelo(sequelize, Sequelize);
const imagenMenu = imagenMenuModelo(sequelize, Sequelize);
const imagenGimnasio = imagenGimnasioModelo(sequelize, Sequelize);
const horario = horarioModelo(sequelize, Sequelize);
const gimnasio = gimnasioModelo(sequelize, Sequelize);
const entrenador = entrenadorModelo(sequelize, Sequelize);
const categoria = categoriaModelo(sequelize, Sequelize);

//Foreng key de usuario a la tabla entrenador
usuario.hasMany(entrenador)
entrenador.belongsTo(usuario)

//Foreng key de usuario y info_cliente a la tabla salud
usuario.hasMany(salud)
salud.belongsTo(usuario)
info_cliente.hasMany(salud)
salud.belongsTo(info_cliente)

//Foreng key de usuario y info_cliente a la tabla horario
usuario.hasMany(horario)
horario.belongsTo(usuario)
info_cliente.hasMany(horario)
horario.belongsTo(info_cliente)

//Foreng key de usuario a la tabla gimnasio
usuario.hasMany(gimnasio)
gimnasio.belongsTo(usuario)

//Foreng key de usuario a la tabla menu
usuario.hasMany(menu)
menu.belongsTo(usuario)

//Foreng key de gimnasio a la tabla imagenGimnasio
gimnasio.hasMany(imagenGimnasio)
imagenGimnasio.belongsTo(gimnasio)

//Foreng key de menu a la tabla imagenMenu
menu.hasMany(imagenMenu)
imagenMenu.belongsTo(menu)

//Foreng key de usuario y info_cliente a la tabla usuario_cliente
usuario.hasMany(usuario_cliente)
usuario_cliente.belongsTo(usuario)
info_cliente.hasMany(usuario_cliente)
usuario_cliente.belongsTo(info_cliente)

module.exports = {
    usuario,
    usuario_cliente,
    titulo,
    salud,
    menu,
    info_cliente,
    imagenMenu,
    imagenGimnasio,
    horario,
    gimnasio,
    entrenador,
    categoria
}