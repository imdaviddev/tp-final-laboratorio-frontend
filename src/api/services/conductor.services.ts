import axios from 'axios';
import { IConductor, IConductorCreate, IConductorUpdate } from "../models/conductores.models";

const API_URL_BASE = 'http://127.0.0.1:3000'
const API_URL = API_URL_BASE + '/conductores';

export async function getConductores(): Promise<IConductor[]> {
  try {
    const response = await axios.get<IConductor[]>(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener los conductores');
  }
}

export async function createConductor(conductor: IConductorCreate): Promise<IConductor> {
  try {
    const response = await axios.post<IConductor>(API_URL, conductor, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error al crear el conductor');
  }
}

export async function updateConductor(conductor: IConductorUpdate): Promise<IConductor> {
  try {
    const response = await axios.put<IConductor>(`${API_URL}/${conductor.id}`, conductor, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error al actualizar el conductor');
  }
}

export async function deleteConductor(id: number): Promise<void> {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw new Error('Error al eliminar el conductor');
  }
}
