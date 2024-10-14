export interface IRecorrido {
    id_viaje: number;
    id_conductor: number;
    matricula: string;
    estado: string; 
    f_asignacion: string | EstadoPaquete; 
    f_inicio: string; 
    costo: number;
    f_finalizacion: string; 
}

export enum Estado {
    ASIGNADO = "ASIGNADO",
    EN_CURSO = "EN CURSO",
    FINALIZADO = "FINALIZADO",
    NO_FINALIZADO = "NO FINALIZADO",
}

export type EstadoPaquete = {
    id: number;
    nombre: Estado;
}


export interface IRecorridoCreate {
    id_conductor: number;
    matricula: string;
    estado: EstadoPaquete | string; 
    f_asignacion: string; 
    f_inicio: string; 
    costo: number;
    f_finalizacion: string; 
}