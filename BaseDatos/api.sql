DROP DATABASE IF EXISTS fitGym;
CREATE DATABASE fitGym;
USE fitGym;

    create table usuario(
        id int(11) primary key not null,
        username varchar(16) not null,
        password varchar(60) not null,
        email varchar(60) not null
    );

    alter table usuario modify id int(11) not null auto_increment, auto_increment = 1;

    create table info_cliente(
        id int(11) primary key not null,
        username varchar(16) not null,
        password varchar(60) not null,
        email varchar(60) not null,
        nombres varchar(50) not null,
        apellidos varchar(50) not null,
        cedula int(10) not null,
        edad int(3) not null,
        telefono int(10) not null,
        altura varchar(4) not null,
        peso varchar(4) not null   
    );

    alter table info_cliente modify id int(11) not null auto_increment, auto_increment = 1;

    create table entrenador(
        id int(11) primary key not null,
        nombres varchar(50) not null,
        apellidos varchar(50) not null,
        cedula int(10) not null,
        edad int(3) not null,
        telefono int(10) not null,
        titulo varchar(200) not null,
        añosExperiencia int(3) not null,
        descripcion varchar(600) not null,
        cliente int(11) not null,
        usuario int(11) not null,
        constraint fk_cliente foreign key(cliente) references info_cliente(id),
        constraint fk_info_usuario foreign key(usuario) references usuario(id)
    );

    alter table entrenador modify id int(11) not null auto_increment, auto_increment = 1;

    create table salud(
        id int(11) primary key not null,
        lesion_ocia varchar(2) not null,
        lesion_muscular varchar(2) not null,
        enfermedad varchar(50) not null,
        vicios varchar(50) not null,
        embarazo varchar(2) not null,
        dificultades varchar(50) not null,
        actividad_deportiva varchar (50) not null,
        entidad varchar(50) not null,
        cliente int(11) not null,
        usuario int(11) not null,
        constraint fk_id_usuarios foreign key(usuario) references usuario(id),
        constraint fk_id_clientes foreign key(cliente) references info_cliente(id)
    );

    alter table salud modify id int(11) not null auto_increment, auto_increment = 1;

    create table horario(
        id int(11) primary key not null,
        dias varchar(15) not null,
        fechas timestamp not null default current_timestamp,
        mes varchar(4) not null,
        horas varchar(15) not null,
        cliente int(11) not null,
        usuario int(11) not null,
        constraint fk_horario_usuario foreign key(usuario) references usuario(id),
        constraint fk_clientes foreign key(cliente) references info_cliente(id)
    ); 

    alter table horario modify id int(11) not null auto_increment, auto_increment = 1;

    create table gimnasio(
        id int(11) primary key not null,
        nombre varchar(100) not null,
        inscripcion varchar(600) not null,
        mensualidad varchar(600) not null,
        horario varchar(200) not null,
        bajas varchar(600) not null,
        higiene varchar(600) not null,
        seguridad varchar(600) not null,
        contacto varchar(50) not null,
        direccion varchar(200) not null,
        imagenInstalacion varchar(2000) not null,
        estado varchar(20) not null,
        usuario int(11) not null,
        constraint fk_gimnasio_usuario foreign key(usuario) references usuario(id)
    );

    alter table gimnasio modify id int(11) not null auto_increment, auto_increment = 1;

    create table menu(
        id int(11) primary key not null,
        nombre varchar(50) not null,
        descripcion varchar(2000) not null,
        dias varchar(4) not null,
        semanas varchar(50) not null,
        categoria varchar(50) not null,
        usuario int(11) not null,
        constraint fk_menu_usuario foreign key(usuario) references usuario(id)
    );

    alter table menu modify id int(11) not null auto_increment, auto_increment = 1;

    create table categoria(
        id int(11) primary key not null,
        nombre varchar(50) not null
    );

    create table titulo(
        id int(11) primary key not null,
        nombre varchar(200) not null,
        año int(4) not null,
        descripcion varchar(600) not null
    );

    create table imagenGimnasio(
        id int(11) primary key not null,
        nombre varchar(1000) not null,
        gimnasio int(11) not null,
        constraint fk_imagen_gimnasio foreign key(gimnasio) references gimnasio(id)
    );

    alter table imagenGimnasio modify id int(11) not null auto_increment, auto_increment = 1;

    create table imagenMenu(
        id int(11) primary key not null,
        nombre varchar(1000) not null,
        menu int(11) not null,
        constraint fk_imagen_menu foreign key(menu) references menu(id)
    );

    alter table imagenMenu modify id int(11) not null auto_increment, auto_increment = 1;

    create table usuario_cliente(
        id int(11) primary key not null,
        usuario int(11) not null,
        cliente int(11) not null,
        constraint fk_id_usuario foreign key(usuario) references usuario(id),
        constraint fk_id_cliente foreign key(cliente) references info_cliente(id)
    );

    alter table usuario_cliente modify id int(11) not null auto_increment, auto_increment = 1;

    Insert into titulo(id, nombre, descripcion) values (1, "Licenciatura en Actividades y Deportes Ciencia Física", "El Licenciado en Actividades y Deportes Ciencia Física es el promotor de los estilos de vida activos y saludables de la población del entorno donde se desenvuelve." );
    Insert into titulo(id, nombre, descripcion) values (2, "Ciencias de la Actividad Física y del Deporte", "El Grado en Ciencias de la Actividad Física y del Deporte se adquiere la formación necesaria sobre los fundamentos y funciones de la motricidad humana, el entrenamiento deportivo, los aspectos psicológicos, sociales y mecánicos del ejercicio físico, y la aplicación de las nuevas tecnologías en el deporte." );
    Insert into titulo(id, nombre, descripcion) values (3, "Técnico Superior en Animación de Actividades Físicas y Deportivas", "El Técnico Superior en Animación de Actividades Físicas y Deportivas se basa en la enseñanza y dinamismo de distintos aspectos como las actividades físicas y recreativas y los juegos y actividades físico-deportivas, tanto individuales como de equipo.");
    Insert into titulo(id, nombre, descripcion) values (4, "Técnico Superior en Enseñanza y Animación Socio deportiva.", "El Técnico Superior en Enseñanza y Animación Socio deportiva se forman profesionales capaces de elaborar, gestionar y evaluar proyectos de animación físco-deportivos recreativos para todo tipo de usuarios, programando y dirigiendo las actividades de enseñanza, de inclusión sociodeportiva y de tiempo libre, coordinando las actuaciones de los profesionales implicados, garantizando la seguridad, respetando el medio ambiente y consiguiendo la satisfacción de los usuarios, en los límites de costes previstos.");
    Insert into titulo(id, nombre, descripcion) values (5, "Certificado especializado en Personal Trainer ", "El Certificado especializado en Personal Trainer se evalúan la fortaleza física y las debilidades de los clientes y elaboran planes de entrenamiento personalizados. Prestan ayuda física y psíquica y controlan el progreso de los clientes periódicamente. También se aseguran de que los clientes no se lesionen mientras entrenan.");

    Insert into categoria values(1, "Carbohidratos");
    Insert into categoria values(2, "Vegetales");
    Insert into categoria values(3, "Frutas");
    Insert into categoria values(4, "Proteínas");
    Insert into categoria values(5, "Lácteos");
    Insert into categoria values(6, "Grasa");