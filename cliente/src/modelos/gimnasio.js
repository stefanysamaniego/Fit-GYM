const Gimnasio = (sequelize,type) =>{
    return sequelize.define('gimnasios',{
        idGimnasio: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: type.STRING,
    inscripcion: type.STRING,
    mensualidad: type.STRING,
    horario: type.STRING,
    bajas: type.STRING,
    higiene: type.STRING,
    seguridad: type.STRING,
    contacto: type.STRING, 
    direccion: type.STRING,   
    imagenInstalacion: type.STRING,
    estado: type.STRING,      
        creacionGimnasios:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionGimnasios:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
})
}
module.exports = Gimnasio;