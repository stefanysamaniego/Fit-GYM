const express = require('express'); 
const rutas = express.Router()
//const path = require("path")
//const multer = require("multer") 

const {mostrar, mandar, listar, traer, editar} = require("../controladores/gimnasioControlador")
const {isLogin} = require("../lib/auth")
//const imagenDetalle = multer.diskStorage({
//    destination: path.join(__dirname, "public/img"),
//    filename: (req, file, cb) => {
//        cb(null, file.originalname)
//    }
//})

//const tipo = multer({
//    storage: imagenDetalle,
//    dest: path.join(__dirname, "public/img"),
//    fileFilter: (req, file, cb) => {
//        const tipoImagen = /jpeg|jpg|png|gif/
//        const tipoMultiple = tipoImagen.test(file.mimetype)
//        const extension = tipoImagen.test(path.extname(file.originalname))
//        if(tipoMultiple && extension){
//            return cb(null, true)
//        } 
//        cb ("Error de tipo de imagen")
//    }
//}).single("nombre")

rutas.get("/agregar", isLogin, mostrar)
rutas.post("/agregar", isLogin, mandar)
 
rutas.get("/listar", isLogin, listar) 
//rutas.post("/listar", isLogin, imagenAgregar)

rutas.get("/editar/:id", isLogin, traer)
rutas.post("/editar/:id", isLogin, editar)

module.exports = rutas