export interface IPaquete {
    id: number;
//  id_paquete: number;
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

export interface IPaqueteCreate {
    id_viaje: number | null;
    id_conductor:  number | null;
    matricula: string | null;
    descripcion: string;
    estado: string;
    peso_kg: number;
    nombre_cliente: string;
    volumen: number;
    localidad: string;rega: string;
    direccion_entrega: string;
}

export interface IPaqueteUpdate {
    id: number,
    estado: string  
}

export enum EstadoPaquete {
    "ASIGNADO",
    "SIN ASIGNAR",
    "EN VIAJE",
    "ENTREGADO",
    "NO ENTREGADO"
}