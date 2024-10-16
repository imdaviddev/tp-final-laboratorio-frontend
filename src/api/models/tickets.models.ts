export interface ITicket {
    id_ticket: number
    nombre_usuario: string
    descripcion_problemas: string
    fecha_creacion: string
    fecha_finalizacion: string
    estado: Estado |string,
    tipo: Tipo | string,
    matricula: string
    costoTotal: number
    descripcion_reparaciones: string
}

export interface ITicketCreate {
    matricula: string
    descripcion_problemas: string
    nombre_usuario: string
    tipo: Tipo | string
}

export interface ITicketUpdate {
    id_ticket: number
    estado: Estado | string
}

export enum Estado {
    EN_CURSO = "EN CURSO",
    SIN_SOLUCION = "SIN SOLUCION",
    RESUELTO = "RESUELTO"
}

export enum Tipo {
    MANTENIMIENTO = "MANTENIMIENTO",
    REPARACION = "REPARACION"
}