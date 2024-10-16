import { create } from 'zustand';
import { IRecorrido, IRecorridoCreate, IRecorridoUpdate } from '../api/models/recorridos.models';
import { createRecorrido, getRecorridos, updateRecorrido } from '../api/services/recorridos.services';

type recorridosStore = {
  recorridos: IRecorrido[];
  hasFetched: boolean; 
  obtenerRecorridos: () => Promise<void>;
  crearRecorrido: (newRecorrido: IRecorridoCreate) => Promise<void>;
  actualizarRecorrido: (updateRecorrido: IRecorridoUpdate) => Promise<void>;
};
const useRecorridoStore = create<recorridosStore>((set, get) => ({
  recorridos: [],
  hasFetched: false, 
  
  obtenerRecorridos: async () => {
    if (get().hasFetched) return; 

    try {
      const data = await getRecorridos();
      set({ recorridos: data, hasFetched: true }); 
    } catch (error) {
      console.error('Failed to fetch recorridos:', error);
    }
  },

  crearRecorrido: async (newRecorrido: IRecorridoCreate) => {
    try {
      const createdPaquete = await createRecorrido(newRecorrido);
      set((state) => ({
        recorridos: [...state.recorridos, createdPaquete],
      }));
    } catch (error) {
      console.error('Failed to create Paquete:', error);
    }
  },

  actualizarRecorrido: async (updatedRecorrido: IRecorridoUpdate) => {
    try {
      const updatedPaqueteFromServer = await updateRecorrido(updatedRecorrido);
      set((state) => ({
        recorridos: state.recorridos.map((recorrido) =>
          recorrido.id_viaje === updatedRecorrido.id_viaje ? updatedPaqueteFromServer : recorrido
        ),
      }));
    } catch (error) {
      console.error('Failed to update Paquete:', error);
    }
  },
}));

export default useRecorridoStore;
