export interface IRecorrido {
    id: number;
    //id_viaje: number;
    id_conductor: number;
    matricula: string;
    estado: string; // Solo el nombre del estado
    f_asignacion: string; // Fecha y hora de asignación
    f_inicio: string; // Fecha y hora de inicio del viaje
    costo: number; // Costo del viaje
    f_finalizacion: string; // Fecha y hora de finalización, puede ser vacío si no ha finalizado
}

export interface IRecorridoCreate {
    id_conductor: number;      // ID del conductor asignado
    matricula: string;         // Matrícula del vehículo
    estado: string;            // Estado inicial del viaje (ej: "EN CURSO")
    f_asignacion: string;      // Fecha y hora de asignación
    f_inicio: string;          // Fecha y hora de inicio del viaje
    costo: number;             // Costo del viaje
}

export interface IRecorridoUpdate {
    id: number
    //id_viaje: number;
    estado?: string;           // Nuevo estado del viaje (opcional)
    f_finalizacion?: string;   // Fecha y hora de finalización del viaje (opcional)
    costo?: number;            // Costo actualizado del viaje (opcional)
}