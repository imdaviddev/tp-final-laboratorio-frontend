import axios from 'axios';
import { IRepuesto, IRepuestoUpdate } from "../models/respuestos.models";

const API_URL_BASE = 'http://127.0.0.1:3000'
const API_URL = API_URL_BASE + '/repuestos';

export async function getRepuestos(): Promise<IRepuesto[]> {
    try {
        const response = await axios.get<IRepuesto[]>(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener los repuesto');
    }
}

export async function updateRepuesto(repuesto: IRepuestoUpdate): Promise<IRepuesto> {
    try {
        const response = await axios.put<IRepuesto>(`${API_URL}/${repuesto.id_repuesto}`, repuesto, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error al actualizar el repuesto');
    }
}

export async function deleteRepuesto(id: number): Promise<void> {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        throw new Error('Error al eliminar el repuesto');
    }
}
