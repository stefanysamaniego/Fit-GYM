const Info_cliente = (sequelize,type) =>{
    return sequelize.define('info_clientes',{
        idInfo_Cliente: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: type.STRING,
    password: type.STRING,
    nombres: type.STRING,
    cedula: type.INTEGER,
    edad: type.INTEGER,
    telefono: type.STRING,
    altura: type.STRING,
    peso: type.STRING,
        creacionInfo_Clientes:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionInfo_Clientes:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
})
}
module.exports = Info_cliente;