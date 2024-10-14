import { create } from 'zustand';
import { IPaquete, IPaqueteCreate, IPaqueteUpdate } from '../api/models/paquetes.models';
import { createPaquete, getPaquetes, updatePaquete } from '../api/services/paquetes.services';

type paquetesStore = {
  paquetes: IPaquete[];
  hasFetched: boolean; 
  obtenerPaquetes: () => Promise<void>;
  crearPaquete: (newPaquete: IPaqueteCreate) => Promise<void>;
  actualizarPaquete: (updatedPaquete: IPaqueteUpdate) => Promise<void>;
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

  crearPaquete: async (newPaquete: IPaqueteCreate) => {
    try {
      const createdPaquete = await createPaquete(newPaquete);
      set((state) => ({
        paquetes: [...state.paquetes, createdPaquete],
      }));
    } catch (error) {
      console.error('Failed to create Paquete:', error);
    }
  },

  actualizarPaquete: async (updatedPaquete: IPaqueteUpdate) => {
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
