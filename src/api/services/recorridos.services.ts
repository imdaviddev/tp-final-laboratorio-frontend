import axios from 'axios';
import { IRecorrido, IRecorridoCreate, IRecorridoUpdate } from "../models/recorridos.models";

const API_URL_BASE = 'http://127.0.0.1:3000'
const API_URL = API_URL_BASE + '/viajes';

export async function getRecorridos(): Promise<IRecorrido[]> {
  try {
    const response = await axios.get<IRecorrido[]>(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener los conductores');
  }
}

export async function createRecorrido(recorrido: IRecorridoCreate): Promise<IRecorrido> {
  try {
    const response = await axios.post<IRecorrido>(API_URL, recorrido, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error al crear el recorrido');
  }
}

export async function updateRecorrido(recorrido: IRecorridoUpdate): Promise<IRecorrido> {
  try {
    const response = await axios.put<IRecorrido>(`${API_URL}/${recorrido.id}`, recorrido, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error al actualizar el recorrido');
  }
}

export async function deleteRecorrido(id: number): Promise<void> {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw new Error('Error al eliminar el recorrido');
  }
}
