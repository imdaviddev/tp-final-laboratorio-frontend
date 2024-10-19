import axios from 'axios';
import { IProveedor } from "../models/proveedores.models";

const API_URL_BASE = 'http://127.0.0.1:3000'
const API_URL = API_URL_BASE + '/proveedores';

export async function createProveedor(proveedor: IProveedor): Promise<IProveedor> {
    try {
        const response = await axios.post<IProveedor>(API_URL, proveedor, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error al crear el proveedor');
    }
}

export async function getProveedores(): Promise<IProveedor[]> {
    try {
        const response = await axios.get<IProveedor[]>(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener los proveedores');
    }
}

export async function updateProveedor(proveedor: IProveedor): Promise<IProveedor> {
    try {
        const response = await axios.put<IProveedor>(`${API_URL}/${proveedor.id}`, proveedor, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error al actualizar el proveedor');
    }
}

export async function deleteProveedor(id: number): Promise<void> {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        throw new Error('Error al eliminar el proveedor');
    }
}
