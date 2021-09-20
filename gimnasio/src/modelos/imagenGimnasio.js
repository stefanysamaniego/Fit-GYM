const ImagenGimnasio = (sequelize,type) =>{
    return sequelize.define('imagenGimnasios',{
        idImagenGimnasio: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: type.STRING,
    gimnasio: type.INTEGER,
        creacionImagenGimnasios:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionImagenGimnasios:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
})
}
module.exports = ImagenGimnasio;