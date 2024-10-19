import axios from 'axios';
import { IPaquete } from "../models/paquetes.models";

const API_URL_BASE = 'http://127.0.0.1:3000'
const API_URL = API_URL_BASE + '/paquetes';

export async function getPaquetes(): Promise<IPaquete[]> {
  try {
    const response = await axios.get<IPaquete[]>(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener los Paquetes');
  }
}

export async function createPaquete(Paquete: IPaquete): Promise<IPaquete> {
  try {
    const response = await axios.post<IPaquete>(API_URL, Paquete, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error al crear el Paquete');
  }
}

export async function updatePaquete(paquete: IPaquete): Promise<IPaquete> {
  try {
    const response = await axios.put<IPaquete>(`${API_URL}/${paquete.id}`, paquete, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error al actualizar el Paquete');
  }
}

export async function deletePaquete(id: number): Promise<void> {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw new Error('Error al eliminar el Paquete');
  }
}
