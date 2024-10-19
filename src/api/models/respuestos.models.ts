export interface IRepuesto {
    id: number ;
    id_catalogo:  | string;
    nombre: string;
    stock: number;
    stock_minimo: number;
    cant_a_comprar: number;
    costo: number;
    descripcion: string;
}


export interface IRepuestoUpdate {
    id_repuesto: number;
    cant_a_comprar: number;

}