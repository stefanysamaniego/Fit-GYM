const ImagenMenu = (sequelize,type) =>{
    return sequelize.define('imagenMenus',{
        idImagenMenu: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: type.STRING,
        creacionImagenMenus:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionImagenMenus:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
})
}
module.exports = ImagenMenu;