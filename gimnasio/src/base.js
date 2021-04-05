const { connect } = require("http2")
const mysql = require("mysql")
const { promisify } = require("util")
const { database } = require("./keys")
const pool = mysql.createPool(database)

pool.getConnection((err, connection)=>{
    if(err){
        if(err.code === "PROTOCOL_CONNECTION_LOST"){
            console.error("Se cerro la connection a la base de datos")
        }
        if(err.code === "ER_CON_COUNT_ERROR"){
            console.error("La base tiene muchas conexiones")
        }
        if(err.code === "ECONNREFUSED"){
            console.error("La conexión a la base de datos no realizada")
        }
    }
    if(connection) connection.release()
    console.log("La base esta conectada")
    

    return
})

pool.query = promisify(pool.query)
module.exports = pool