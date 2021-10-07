const Usuario = (sequelize,type) =>{
    return sequelize.define('usuarios',{
        idUsuario: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombres: type.STRING,
    apellidos: type.STRING,
    username: type.STRING(99),
    password: type.STRING,
        creacionUsuarios:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionUsuarios:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
})
}
module.exports = Usuario;