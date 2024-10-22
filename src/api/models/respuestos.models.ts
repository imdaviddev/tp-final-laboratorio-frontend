export interface IRepuesto {
    id: number ;
    id_catalogo: number;
    nombre: string;
    stock: number;
    stock_minimo: number;
    cant_a_comprar: number;
    costo: number;
    descripcion: string;
}

export interface IRepuestoUtilizado {
    id: number;
    id_ticket: number;
    cantidad: number;
    costo: number;
}

export interface IRepuestoUpdate {
    id_repuesto: number;
    cant_a_comprar: number;

}