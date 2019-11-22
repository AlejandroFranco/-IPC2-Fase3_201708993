export interface Actividad {
  id_Actividad: number;
  idCursoSemestre?: number;
  fechaEntrega?: Date;
  descripcion?: string;
  ponderacion?: string;
  fechaPublicacion?: Date;
  estado?: string;
  datosAdjuntos?: any;
}