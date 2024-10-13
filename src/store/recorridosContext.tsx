import { create } from 'zustand';
import { IRecorrido, IRecorridoCreate } from '../api/models/recorridos.models';
import { createRecorrido, getRecorridos } from '../api/services/recorridos.services';

type recorridostore = {
  recorridos: IRecorrido[];
  hasFetched: boolean;
  obtenerRecorridos: () => Promise<void>;
  obtenerRecorrido: (recorridoId: number) => Promise<IRecorrido>;
  crearRecorrido: (newRecorrido: IRecorridoCreate) => Promise<void>;
};

const useRecorridostore = create<recorridostore>((set, get) => ({
  recorridos: [],
  hasFetched: false,

  obtenerRecorridos: async () => {
    if (get().hasFetched) return;

    try {
      const data = await getRecorridos();
      set({ recorridos: data, hasFetched: true });
    } catch (error) {
      console.error('Failed to fetch Recorridos:', error);
    }
  },

  obtenerRecorrido: async (recorridoId: number) => {
    try {
      //const data = await getRecorridoById(recorridoId); OPCION POR API
      return get().recorridos.find(r => r.id_viaje === recorridoId);
    } catch (error) {
      console.error('Failed to fetch Recorrido:', error);
    }
  },

  crearRecorrido: async (newRecorrido: IRecorridoCreate) => {
    try {
      const createdRecorrido = await createRecorrido(newRecorrido);
      set((state) => ({
        recorridos: [...state.recorridos, createdRecorrido],
      }));
    } catch (error) {
      console.error('Failed to create Recorrido:', error);
    }
  },
}));

export default useRecorridostore;
