import axios from 'axios';
import { IPaquete, IPaqueteCreate, IPaqueteUpdate } from "../models/paquetes.models";

const API_URL_BASE = 'http://127.0.0.1:3000'
const API_URL = API_URL_BASE + '/paquetes';

export async function getPaquetes(): Promise<IPaquete[]> {
    try {
        const response = await axios.get<IPaquete[]>(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener los paquetes');
    }
}

export async function createPaquete(paquete: IPaqueteCreate): Promise<IPaquete> {
    try {
        const response = await axios.post<IPaquete>(API_URL, paquete, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error al crear el paquete');
    }
}

export async function updatePaquete(paquete: IPaqueteUpdate): Promise<IPaquete> {
    try {
      const response = await axios.put<IPaquete>(`${API_URL}/${paquete.id}`, paquete, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Error al actualizar el paquete');
    }
  }

export async function deletePaquete(id: number): Promise<void> {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        throw new Error('Error al eliminar el paquete');
    }
}
