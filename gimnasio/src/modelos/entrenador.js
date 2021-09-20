const Entrenador = (sequelize,type) =>{
    return sequelize.define('Entrenadores',{
        idEntrenador: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombres: type.STRING,
    apellidos: type.STRING,
    cedula: type.INTEGER,
    edad: type.INTEGER,
    telefono: type.INTEGER,
    titulo: type.STRING,
    añosExperencia: type.INTEGER,
    descripcion: type.STRING,
    usuario: type.INTEGER,
        creacionEntrenadores:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionEntrenadores:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
})
}
module.exports = Entrenador;