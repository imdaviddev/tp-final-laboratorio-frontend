export interface IConductor {
    id: number
    nombre: string
    apellido: string
    dni: string
    rol: string
}

export interface IConductorCreate {
    nombre: string
    apellido: string
    dni: string
    rol: string
}

export interface IConductorUpdate {
    id: number
    nombre: string
    apellido: string
    dni: string
    rol: string
}
