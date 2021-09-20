const Usuario_cliente = (sequelize,type) =>{
    return sequelize.define('usuario_clientes',{
        idTitulo: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    usuario: type.INTEGER,
    cliente: type.INTEGER,
        creacionUsuario_clientes:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionUsuario_clientes:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
})
}
module.exports = Usuario_cliente;