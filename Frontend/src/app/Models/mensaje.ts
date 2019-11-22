export interface Mensaje {
    idCuentaUsuario?: number;
    id_Destinatario?: number;
    id_Mensaje: number;
    asunto?: string;
    cuerpo?: string;
    archivosAdjuntos?: any;
    id_Remitente?: number;
    fechaEnvio?: Date;
}