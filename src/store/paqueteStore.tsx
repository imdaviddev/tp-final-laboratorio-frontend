import { create } from 'zustand';
import { IPaquete } from '../api/models/paquetes.models';
import { createPaquete, getPaquetes, updatePaquete } from '../api/services/paquetes.services';

type paquetesStore = {
  paquetes: IPaquete[];
  hasFetched: boolean; 
  obtenerPaquetes: () => Promise<void>;
  crearPaquete: (newPaquete: IPaquete) => Promise<void>;
  actualizarPaquete: (updatedPaquete: IPaquete) => Promise<void>;
};
const usePaqueteStore = create<paquetesStore>((set, get) => ({
  paquetes: [],
  hasFetched: false, 
  
  obtenerPaquetes: async () => {
    if (get().hasFetched) return; 

    try {
      const data = await getPaquetes();
      set({ paquetes: data, hasFetched: true }); 
    } catch (error) {
      console.error('Failed to fetch paquetes:', error);
    }
  },

  crearPaquete: async (newPaquete: IPaquete) => {
    try {
      const createdPaquete = await createPaquete(newPaquete);
      set((state) => ({
        paquetes: [...state.paquetes, createdPaquete],
      }));
    } catch (error) {
      console.error('Failed to create Paquete:', error);
    }
  },

  actualizarPaquete: async (updatedPaquete: IPaquete) => {
    try {
      const updatedPaqueteFromServer = await updatePaquete(updatedPaquete);
      set((state) => ({
        paquetes: state.paquetes.map((paquete) =>
          paquete.id === updatedPaquete.id ? updatedPaqueteFromServer : paquete
        ),
      }));
    } catch (error) {
      console.error('Failed to update Paquete:', error);
    }
  },
}));

export default usePaqueteStore;
