CREATE DATABASE SISTEMA_EDUCATIVO;

USE  SISTEMA_EDUCATIVO;

CREATE TABLE IF NOT EXISTS Rol(
id_Rol INT,
nombreRol VARCHAR(20),
PRIMARY KEY(id_Rol));

CREATE TABLE IF NOT EXISTS CuentaUsuario(
id_CuentaUsuario INT,
nombre VARCHAR(20),
correo VARCHAR(50),
pass VARCHAR(20),
cui BIGINT,
carnet BIGINT,
idRol INT,
PRIMARY KEY(id_CuentaUsuario),
FOREIGN KEY (idRol)REFERENCES Rol(id_Rol));


CREATE TABLE IF NOT EXISTS Ticket(
id_Ticket INT,
codigo BIGINT,
asunto VARCHAR(20),
contenido VARCHAR(255),
estado VARCHAR (30),
idCuentaUsuario INT,
PRIMARY KEY(id_Ticket),
FOREIGN KEY (idCuentaUsuario) REFERENCES CuentaUsuario(id_CuentaUsuario));

CREATE TABLE IF NOT EXISTS Curso(
id_Curso INT,
nombreCurso VARCHAR(50),
codigo INT,
PRIMARY KEY(id_Curso)
);

CREATE TABLE IF NOT EXISTS CursoSemestre (
id_CursoSemestre INT,
descripcion VARCHAR(50),
horaInicio VARCHAR(20),
horaFinal VARCHAR(10),
seccion VARCHAR(5),
semestre VARCHAR(20),
ciclo YEAR(4),
codCurso INT,
edificio VARCHAR(15),
id_CuentaUsuario INT,
idCurso INT,
PRIMARY KEY (id_CursoSemestre),
FOREIGN KEY (id_CuentaUsuario) REFERENCES CuentaUsuario(id_CuentaUsuario),
FOREIGN KEY (idCurso) REFERENCES Curso(id_Curso)
);

CREATE TABLE IF NOT EXISTS Asignacion(
id_Asignacion INT,
idCurso INT,
fecha_Asignacion DATETIME,
idCursoSemestre INT,
id_CuentaUsuario INT,
PRIMARY KEY(id_Asignacion),
FOREIGN KEY (id_CuentaUsuario) REFERENCES CuentaUsuario(id_CuentaUsuario),
FOREIGN KEY (idCursoSemestre) REFERENCES CursoSemestre(id_CursoSemestre));

CREATE TABLE IF NOT EXISTS Foro(
id_Foro INT,
idCursoSemestre INT,
PRIMARY KEY(id_Foro),
FOREIGN KEY (idCursoSemestre) REFERENCES CursoSemestre(id_CursoSemestre));

CREATE TABLE IF NOT EXISTS Hilo(
id_Hilo INT,
temaHilo VARCHAR(50),
idForo INT,
fechaCreacion VARCHAR(50),
descripcionHilo VARCHAR(50),
PRIMARY KEY(id_Hilo),
FOREIGN KEY (idForo) REFERENCES Foro(id_Foro));

CREATE TABLE IF NOT EXISTS RespuestasHilo(
id_Respuesta INT,
respuesta VARCHAR(255),
idHilo INT,
FOREIGN KEY (idHilo) REFERENCES Hilo(id_Hilo),
PRIMARY KEY (id_Respuesta));

CREATE TABLE IF NOT EXISTS Actividad(
id_Actividad INT,
idCursoSemestre INT,
fechaEntrega DATE,
descripcion VARCHAR(50),
ponderacion VARCHAR(10),
fechaPublicacion DATE,
estado VARCHAR(20),
datosAdjuntos LONGBLOB,
PRIMARY KEY (id_Actividad),
FOREIGN KEY (idCursoSemestre) REFERENCES CursoSemestre(id_CursoSemestre)
);

CREATE TABLE IF NOT EXISTS EntregaActividad(
id_EntregaActividad INT,
idCuentaUsuario INT,
idActividad INT,
datosAdjuntos LONGBLOB,
fechaEntregado DATETIME,
PRIMARY KEY(id_EntregaActividad),
FOREIGN KEY (idCuentaUsuario) REFERENCES CuentaUsuario(id_CuentaUsuario),
FOREIGN KEY (idActividad) REFERENCES Actividad(id_Actividad)
);

CREATE TABLE IF NOT EXISTS Evaluacion(
id_Evaluacion INT,
ponderacion DECIMAL,
fechaCreacion DATETIME,
fechaFinalizacion DATETIME,
idCursoSemestre INT,
PRIMARY KEY (id_Evaluacion),
FOREIGN KEY (idCursoSemestre) REFERENCES CursoSemestre(id_CursoSemestre)
);

CREATE TABLE IF NOT EXISTS Pregunta(
id_Pregunta INT,
id_Evaluacion INT,
id_BateriaPreguntas INT,
pregunta  VARCHAR(50),
PRIMARY KEY(id_Pregunta),
FOREIGN KEY (id_Evaluacion) REFERENCES Evaluacion(id_Evaluacion)
);

CREATE TABLE IF NOT EXISTS RespuestasClave(
id_RespuestasClave INT,
id_Pregunta INT,
respuestaClave VARCHAR(50),
PRIMARY KEY(id_RespuestasClave),
FOREIGN KEY(id_Pregunta) REFERENCES Pregunta(id_Pregunta)
);

CREATE TABLE IF NOT EXISTS Respuesta(
id_Respuesta INT,
id_Pregunta INT,
id_CuentaUsuario INT,
respuestaEstudiante VARCHAR(50),
PRIMARY KEY(id_Respuesta),
FOREIGN KEY (id_Pregunta) REFERENCES Pregunta(id_Pregunta),
FOREIGN KEY (id_CuentaUsuario) REFERENCES CuentaUsuario(id_CuentaUsuario)
);

CREATE TABLE IF NOT EXISTS Mensaje(
idCuentaUsuario INT,
id_Destinatario INT,
id_Mensaje INT,
asunto VARCHAR (30),
cuerpo VARCHAR(255),
archivosAdjuntos LONGBLOB,
id_Remitente INT,
fechaEnvio DATETIME,
PRIMARY KEY (id_Mensaje),
FOREIGN KEY (idCuentaUsuario) REFERENCES CuentaUsuario(id_CuentaUsuario)
);




