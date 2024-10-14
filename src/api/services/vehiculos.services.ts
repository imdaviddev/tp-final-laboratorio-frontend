import axios from 'axios';
import { IVehiculo, IVehiculoCreate, IVehiculoUpdate } from "../models/vehiculos.models";

const API_URL_BASE = 'http://127.0.0.1:3000'
const API_URL = API_URL_BASE + '/vehiculos';

export async function getVehiculos(): Promise<IVehiculo[]> {
  try {
    const response = await axios.get<IVehiculo[]>(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener los conductores');
  }
}

export async function createVehiculo(vehiculo: IVehiculoCreate): Promise<IVehiculo> {
  try {
    const response = await axios.post<IVehiculo>(API_URL, vehiculo, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error al crear el vehiculo');
  }
}

export async function updateVehiculo(vehiculo: IVehiculoUpdate): Promise<IVehiculo> {
  try {
    const response = await axios.put<IVehiculo>(`${API_URL}/${vehiculo.id}`, vehiculo, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error al actualizar el vehiculo');
  }
}

export async function deleteConductor(id: number): Promise<void> {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw new Error('Error al eliminar el vehiculo');
  }
}
