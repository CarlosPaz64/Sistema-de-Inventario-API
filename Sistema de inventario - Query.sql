CREATE DATABASE IF NOT EXISTS inventario; 
-- DROP DATABASE inventario;

USE inventario;

CREATE TABLE IF NOT EXISTS usuarios (
	id_usuarios INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(255) NOT NULL UNIQUE,
    contrasenia VARCHAR(255) NOT NULL,
    foto_de_perfil LONGBLOB
);

CREATE TABLE IF NOT EXISTS productos (
	id_producto INT AUTO_INCREMENT PRIMARY KEY, 
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    cantidad INT NOT NULL DEFAULT 0,
    estatus VARCHAR(255),
    imei VARCHAR(64),
    fotografia1 LONGBLOB,
    fotografia2 LONGBLOB,
    fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );