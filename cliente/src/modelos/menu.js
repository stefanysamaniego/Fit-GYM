const Menu = (sequelize,type) =>{
    return sequelize.define('menus',{
        idMenu: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: type.STRING,
    descripcion: type.STRING,
    dias: type.STRING,
    semanas: type.STRING,
    categoria: type.STRING,
        creacionMenus:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionMenus:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
})
}
module.exports = Menu;