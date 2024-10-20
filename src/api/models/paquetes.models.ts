export interface IPaquete {
    id: number;
    id_viaje: number | null;
    id_conductor:  number | null;
    matricula: string | null;
    descripcion: string;
    estado: string;
    peso_kg: number;
    nombre_cliente: string;
    volumen: number;
    localidad: string;
    direccion_entrega: string;
}

export enum EstadoPaquete {
    "ASIGNADO",
    "SIN ASIGNAR",
    "EN VIAJE",
    "ENTREGADO",
    "NO ENTREGADO"
}

export enum Estado {
    SIN_ASIGNAR = "SIN ASIGNAR",
    ASIGNADO = "ASIGNADO",
    EN_VIAJE = "EN VIAJE",
    ENTREGADO = "ENTREGADO",
    NO_ENTREGADO = "NO ENTREGADO",
}

