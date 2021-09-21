const Salud = (sequelize,type) =>{
    return sequelize.define('saluds',{
        idSalud: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    lesion_ocia: type.STRING,
    lesion_muscular: type.STRING,
    enfermedad: type.STRING,
    vicios: type.STRING,
    embarazo: type.STRING,
    dificultades: type.STRING,
    actividad_deportiva: type.STRING,
    entidad: type.STRING,
        creacionSaluds:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionSaluds:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
})
}
module.exports = Salud;