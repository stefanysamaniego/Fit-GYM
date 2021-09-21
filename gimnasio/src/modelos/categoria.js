const Categoria = (sequelize,type) =>{
    return sequelize.define('categorias',{
        idCategoria: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: type.STRING,
        creacionCategorias:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionCategorias:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
})
}
module.exports = Categoria;