import { IRepuestoUtilizado } from "./respuestos.models"

export interface ITicket {
    id: number;
    nombre_usuario: string
    motivo_ingreso: string
    fecha_creacion: string
    fecha_finalizacion: string
    estado: Estado | string,
    tipo: Tipo | string,
    matricula: string
    costoTotal: number
    descripcion_reparaciones: string
    repuestos: IRepuestoUtilizado[]
}

export interface ITicketUpdate {
    id: number
    nombre_usuario: string
    motivo_ingreso: string
    fecha_creacion: string
    estado: Estado |string,
    tipo: Tipo | string,
    matricula: string
    costoTotal: number
    descripcion_reparaciones: string
    repuestos: IRepuestoUtilizado[]
}

export interface ITicketCreate {
    matricula: string
    descripcion_problemas: string
    nombre_usuario: string
    tipo: Tipo | string
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