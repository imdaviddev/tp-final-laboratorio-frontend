import { create } from 'zustand';
import { IVehiculo, IVehiculoCreate, IVehiculoUpdate } from '../api/models/vehiculos.models';
import { createVehiculo, getVehiculos, updateVehiculo } from '../api/services/vehiculos.services';

type VehiculosStore = {
  vehiculos: IVehiculo[];
  hasFetched: boolean; 
  obtenerVehiculos: () => Promise<void>;
  crearVehiculo: (newVehiculo: IVehiculoCreate) => Promise<void>;
  actualizarVehiculo: (updatedVehiculo: IVehiculoUpdate) => Promise<void>;
};

const useVehiculoStore = create<VehiculosStore>((set, get) => ({
  vehiculos: [],
  hasFetched: false, 
  
  obtenerVehiculos: async () => {
    if (get().hasFetched) return; 

    try {
      const data = await getVehiculos();
      set({ vehiculos: data, hasFetched: true }); 
    } catch (error) {
      console.error('Failed to fetch vehiculos:', error);
    }
  },

  crearVehiculo: async (newVehiculo: IVehiculoCreate) => {
    try {
      const createdVehiculo = await createVehiculo(newVehiculo);
      set((state) => ({
        vehiculos: [...state.vehiculos, createdVehiculo],
      }));
    } catch (error) {
      console.error('Failed to create Vehiculo:', error);
    }
  },

  actualizarVehiculo: async (updatedVehiculo: IVehiculoUpdate) => {
    try {
      const updatedVehiculoFromServer = await updateVehiculo(updatedVehiculo);
      set((state) => ({
        vehiculos: state.vehiculos.map((Vehiculo) =>
          Vehiculo.id === updatedVehiculo.id ? updatedVehiculoFromServer : Vehiculo
        ),
      }));
    } catch (error) {
      console.error('Failed to update Vehiculo:', error);
    }
  },
}));

export default useVehiculoStore;
