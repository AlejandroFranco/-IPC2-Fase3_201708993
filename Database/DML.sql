USE Sistema_Educativo;

INSERT INTO rol(id_Rol,nombreRol)
VALUES('0','Administrador');

INSERT INTO rol(id_Rol,nombreRol)
VALUES('1','Auxiliar');

INSERT INTO rol(id_Rol,nombreRol)
VALUES('2','Estudiante');


INSERT INTO cuentausuario(id_CuentaUsuario,nombre,correo,pass,cui,carnet,idRol)
VALUES('0','Carlos','cpecam@gmail.com','admin','3004470110808','201897554','0');

INSERT INTO cuentausuario(id_CuentaUsuario,nombre,correo,pass,cui,carnet,idRol)
VALUES('1','pablo','pfranco@gmail.com','auxiliar','0304770110280','201797554','1');

INSERT INTO cuentausuario(id_CuentaUsuario,nombre,correo,pass,cui,carnet,idRol)
VALUES('2','jose','js@gmail.com','estudiante','3004470110808','201397554','2');

DELETE FROM cuentausuario WHERE id_CuentaUsuario = 2;

SELECT * FROM cuentausuario;


ALTER TABLE cuentausuario CHANGE correo correo varchar(60);






