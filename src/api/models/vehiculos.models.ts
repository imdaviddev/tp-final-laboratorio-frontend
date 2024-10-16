export interface IVehiculo {
    id: number
    matricula: string
    marca: string  // Añadir la propiedad marca
    modelo: string
    fecha_ingreso: string
    estado: ESTADOVEHICULO  // Se usa el enum para el estado
    peso_admitido: number
    volumen_admitido: number  // Cambio de nombre de volumen_admitido_mts_cubicos
    km_recorridos: number
    anio: number  // Cambiado a number
}

export interface IVehiculoCreate {
    matricula: string
    marca: string  // Añadir la propiedad marca
    modelo: string
    anio: number| string,
    estadoVTV: ESTADOVTV | string,  // Usar el enum para estadoVTV
    fechaVTV: string
    peso_admitido: number | string,
    volumen_admitido: number| string,  // Cambio de nombre
    estado: ESTADOVEHICULO| string,  // Usar el enum para el estado
    km_recorridos: number| string,
}

export interface IVehiculoUpdate {
    id: number
    matricula: string
    marca: string  // Añadir la propiedad marca
    modelo: string
    anio: number  // Cambiado a number
    estado_vtv: ESTADOVTV  // Usar el enum para estadoVTV
    fecha_realizacion_vtv: string
}

export type VTV = {
    estado: ESTADOVTV
    fecha_actualizacion: Date
}

export enum ESTADOVEHICULO {
    NO_APTO_PARA_CIRCULAR = "NO_APTO_PARA_CIRCULAR",
    APTO_PARA_CIRCULAR = "APTO_PARA_CIRCULAR",
    EN_VIAJE = "EN_VIAJE",
    REPARACION = "REPARACION",
    MANTENIMIENTO = "MANTENIMIENTO",
    DESAHABILITO = "DESAHABILITO"
}

export enum ESTADOVTV {
    VENCIDA = "VENCIDA",
    APROBADA = "APROBADA",
    RECHAZADA = "RECHAZADA"
}
