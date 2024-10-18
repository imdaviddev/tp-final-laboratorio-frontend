import axios from 'axios';
import { ICatalogo } from "../models/catalogos.models";

const API_URL_BASE = 'http://127.0.0.1:3000'
const API_URL = API_URL_BASE + '/catalogos';

export async function createCatalogo(catalogo: ICatalogo): Promise<ICatalogo> {
    try {
        const response = await axios.post<ICatalogo>(API_URL, catalogo, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error al crear el catalogo');
    }
}

export async function getCatalogos(): Promise<ICatalogo[]> {
    try {
        const response = await axios.get<ICatalogo[]>(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener los catalogos');
    }
}

export async function updateCatalogo(catalogo: ICatalogo): Promise<ICatalogo> {
    try {
        const response = await axios.put<ICatalogo>(`${API_URL}/${catalogo.id}`, catalogo, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error al actualizar el catalogo');
    }
}

export async function deleteCatalogo(id: number): Promise<void> {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        throw new Error('Error al eliminar el catalogo');
    }
}
