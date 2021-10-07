const index = {} //{} quiere decir areglo de varios metodos
//render nombre de vistas q voy a mostrar
//redirect nombre del acction q tiene la vista
const sql = require('../configuracionBaseDeDatos/base.sql')
const orm = require('../configuracionBaseDeDatos/baseDatos.orm')

index.mostrar = (req, res) => {
    res.render("index");
}

index.mandar = async(req, res) => {
    const titulos = await sql.query('SELECT * FROM titulos')
    const categorias = await sql.query('SELECT * FROM categorias')
    if(titulos.length == 0){
        const titulo = titulos[0]
        if(titulo === undefined){
            await sql.query('Insert into titulos(idTitulo, nombre, descripcion) values (1, "Licenciatura en Actividades y Deportes Ciencia Física", "El Licenciado en Actividades y Deportes Ciencia Física es el promotor de los estilos de vida activos y saludables de la población del entorno donde se desenvuelve." )')
            await sql.query('Insert into titulos(idTitulo, nombre, descripcion) values (2, "Ciencias de la Actividad Física y del Deporte", "El Grado en Ciencias de la Actividad Física y del Deporte se adquiere la formación necesaria sobre los fundamentos y funciones de la motricidad humana, el entrenamiento deportivo, los aspectos psicológicos, sociales y mecánicos del ejercicio físico, y la aplicación de las nuevas tecnologías en el deporte." )')
            await sql.query('Insert into titulos(idTitulo, nombre, descripcion) values (3, "Técnico Superior en Animación de Actividades Físicas y Deportivas", "El Técnico Superior en Animación de Actividades Físicas y Deportivas se basa en la enseñanza y dinamismo de distintos aspectos como las actividades físicas y recreativas y los juegos y actividades físico-deportivas, tanto individuales como de equipo.")')
            await sql.query('Insert into titulos(idTitulo, nombre, descripcion) values (4, "Técnico Superior en Enseñanza y Animación Socio deportiva.", "El Técnico Superior en Enseñanza y Animación Socio deportiva se forman profesionales capaces de elaborar, gestionar y evaluar proyectos de animación físco-deportivos recreativos para todo tipo de usuarios, programando y dirigiendo las actividades de enseñanza, de inclusión sociodeportiva y de tiempo libre, coordinando las actuaciones de los profesionales implicados, garantizando la seguridad, respetando el medio ambiente y consiguiendo la satisfacción de los usuarios, en los límites de costes previstos.")')
            await sql.query('Insert into titulos(idTitulo, nombre, descripcion) values (5, "Certificado especializado en Personal Trainer ", "El Certificado especializado en Personal Trainer se evalúan la fortaleza física y las debilidades de los clientes y elaboran planes de entrenamiento personalizados. Prestan ayuda física y psíquica y controlan el progreso de los clientes periódicamente. También se aseguran de que los clientes no se lesionen mientras entrenan.")')
            console.log('Se guardo con éxito')
        }else{
            console.log('Ya existe')
        }
    }
    if(categorias.length == 0){
        const categoria = categorias[0]
        if(categoria === undefined){
            await sql.query('Insert into categorias(idCategoria, nombre) values(1, "Carbohidratos")')
            await sql.query('Insert into categorias(idCategoria, nombre) values(2, "Vegetales")')
            await sql.query('Insert into categorias(idCategoria, nombre) values(3, "Frutas")')
            await sql.query('Insert into categorias(idCategoria, nombre) values(4, "Proteínas")')
            await sql.query('Insert into categorias(idCategoria, nombre) values(5, "Lácteos")')
            await sql.query('Insert into categorias(idCategoria, nombre) values(6, "Grasa")')
            console.log('Se guardo con éxito')
        }else{
            console.log('Ya existe')
        }
    }
    res.redirect('/validacion');
}

module.exports = index