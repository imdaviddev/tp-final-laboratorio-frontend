export interface IVehiculo {
    id: number
    matricula: string
    modelo: string
    fecha_ingreso: string
    estado: string
    peso_admitido: number
    volumen_admitido_mts_cubicos: number
    km_recorridos: number
    anio: string
    estadoVTV: string
    fechaVTV: string
}

export interface IVehiculoCreate {
    marca: string
    modelo: string
    anio: number
    matricula: string
    estadoVTV: string
    fechaVTV: string
    peso_admitido: number;
    volumen_admitido_mts_cubicos: number
    estado: string;
    km_recorridos: number
}

export interface IVehiculoUpdate {
    id: number
    marca: string
    modelo: string
    anio: string
    matricula: string
    estado_vtv: string;
    fecha_realizacion_vtv: string;
}

export type VTV = {
    estado: ESTADOVTV
    fecha_actualizacion: Date
}

export enum ESTADOVEHICULO {
    NO_APTO_PARA_CIRCULAR,
    APTO_PARA_CIRCULAR,
    EN_VIAJE,
    REPARACION,
    MANTENIMIENTO,
    DESAHABILITO
}

export enum ESTADOVTV {
    VENCIDA,
    APROBADA,
    RECHAZADA
}