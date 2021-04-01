create database fitGym;
use fitGym;

    create table usuario(
        id int(11) primary key not null,
        username varchar(16) not null,
        password varchar(60) not null,
        email varchar(20) not null
    );

    alter table usuario modify id int(11) not null auto_increment, auto_increment = 1;

    create table info_cliente(
        id int(11) primary key not null,
        nombres varchar(50) not null,
        apellidos varchar(50) not null,
        cedula int(10) not null,
        edad int(3) not null,
        telefono int(10) not null,
        altura varchar(4) not null,
        peso varchar(4) not null,
        usuario int(11) not null,
        constraint fk_id_usuario foreign key(usuario) references usuario(id)
    );

    alter table info_cliente modify id int(11) not null auto_increment, auto_increment = 1;

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
        constraint fk_id_cliente foreign key(cliente) references info_cliente(id)
    );

    alter table salud modify id int(11) not null auto_increment, auto_increment = 1;

    create table horario(
        id int(11) primary key not null,
        dias varchar(15) not null,
        fechas timestamp not null default current_timestamp,
        mes varchar(4) not null,
        horas varchar(15) not null,
        cliente int(11) not null,
        constraint fk_cliente foreign key(cliente) references info_cliente(id)
    ); 

    alter table horario modify id int(11) not null auto_increment, auto_increment = 1;

    create table gimnasio(
        id int(11) primary key not null,
        inscripcion varchar(600) not null,
        mensualidad varchar(600) not null,
        horario varchar(15) not null,
        bajas varchar(600) not null,
        higiene varchar(600) not null,
        seguridad varchar(600) not null,
        usuario int(11) not null,
        constraint fk_usuario foreign key(usuario) references usuario(id)
    );

    alter table gimnasio modify id int(11) not null auto_increment, auto_increment = 1;