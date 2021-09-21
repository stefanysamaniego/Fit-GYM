const Horario = (sequelize,type) =>{
    return sequelize.define('horarios',{
        idHorario: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    dias: type.STRING,
    fechas: type.STRING,
    mes: type.STRING,
    horas: type.STRING,
        creacionHorarios:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionHorarios:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
})
}
module.exports = Horario;