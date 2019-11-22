DELIMITER $$
CREATE PROCEDURE sistema_educativo.sp_insertarCurso (IN id INT, IN nombre VARCHAR(50), IN cod INT)
BEGIN
INSERT INTO curso (id_Curso,nombreCurso, codigo)
VALUE(id, nombre, cod);
END $$
DELIMITER ; 

DELIMITER $$
CREATE PROCEDURE sistema_educativo.sp_modificarCurso (IN id INT, IN nombre VARCHAR(50), IN cod INT)
BEGIN
UPDATE  curso
SET  id_Curso = id, nombreCurso = nombre,codigo = codigo
WHERE id_Curso = id ;
END $$
DELIMITER ; 


DELIMITER $$
CREATE PROCEDURE sistema_educativo.sp_eliminarCurso(IN id INT(11))
BEGIN
DELETE FROM sistema_educativo.curso WHERE id_Curso= id;
END $$
DELIMITER ; 


CALL sp_insertarCurso('0','Social Humanistica 1','017');

SELECT * FROM curso;

DELIMITER $$
CREATE PROCEDURE sistema_educativo.sp_insertarticket (IN id INT, IN codigo BIGINT(20), IN asunto VARCHAR(20), IN contenido VARCHAR(255),IN estado VARCHAR(30),idCuenta INT(11))
BEGIN
INSERT INTO curso (id_Ticket,codigo, asunto, contenido, estado, idCuentaUsuario)
VALUE(id, codigo, asunto,contenido,estado,idCuentaUsuario);
END $$
DELIMITER ; 

DROP PROCEDURE IF EXISTS  sistema_educativo.sp_insertarCursoSemestre;

DELIMITER $$
CREATE PROCEDURE sistema_educativo.sp_insertarCursoSemestre (IN id INT, IN des VARCHAR(50), IN hInicio VARCHAR(20), IN hFinal VARCHAR(10),IN seccion VARCHAR(5),semestre VARCHAR(20),IN ciclo YEAR(4),IN codCurso INT(11),IN ed VARCHAR(15), IN idCuenta INT(11),IN idCurso INT(11))
BEGIN
INSERT INTO cursosemestre(id_CursoSemestre,descripcion, horaInicio,horaFinal,seccion,seccion,semestre,ciclo,codCurso,edificio,id_CuentaUsuario,idCurso)
VALUE(id, des, hInicio,hFinal,seccion,semestre,ciclo,codCurso,ed,idCuenta,idCurso);
END $$
DELIMITER ; 


DELIMITER $$
CREATE PROCEDURE sistema_educativo.sp_insertarCuenta(IN id INT(11), IN nombre VARCHAR(20), IN correo VARCHAR(10), IN pass VARCHAR(20), IN cui BIGINT(20), IN carnet BIGINT(20), idRol INT(11))
BEGIN
INSERT INTO curso (id_CuentaUsuario,nombre, correo,pass,cui,carnet,idRol)
VALUE(id,nombre, correo,pass,cui,carnet,idRol);
END $$
DELIMITER ; 


DROP PROCEDURE IF EXISTS  sistema_educativo.sp_modificarCuenta;

DELIMITER $$
CREATE PROCEDURE sistema_educativo.sp_modificarCuenta(IN id INT(11), IN nombre VARCHAR(20), IN correo VARCHAR(10), IN pass VARCHAR(20), IN cui BIGINT(20), IN carnet BIGINT(20), idRol INT(11))
BEGIN
UPDATE sistema_educativo.cuentausuario
SET nombre = nombre,correo = correo,pass= pass,cui =cui,carnet =carnet,idRol = idRol
WHERE id_CuentaUsuario = id;
END $$
DELIMITER ; 

DELIMITER $$
CREATE PROCEDURE sistema_educativo.sp_eliminarCuenta(IN id INT(11))
BEGIN
DELETE FROM sistema_educativo.cuentausuario WHERE id_CuentaUsuario = id;
END $$
DELIMITER ; 




