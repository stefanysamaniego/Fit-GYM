const Usuario_cliente = (sequelize,type) =>{
    return sequelize.define('usuario_clientes',{
        idUsuarioCliente: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
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