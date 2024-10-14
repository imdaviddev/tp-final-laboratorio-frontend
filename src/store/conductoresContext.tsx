import { create } from 'zustand';
import { IConductor, IConductorCreate, IConductorUpdate } from '../api/models/conductores.models';
import { createConductor, getConductores, updateConductor } from '../api/services/conductor.services';

type ConductorStore = {
  conductores: IConductor[];
  hasFetched: boolean; 
  obtenerConductores: () => Promise<void>;
  crearConductor: (newConductor: IConductorCreate) => Promise<void>;
  actualizarConductor: (updatedConductor: IConductorUpdate) => Promise<void>;
};

const useConductorestore = create<ConductorStore>((set, get) => ({
  conductores: [],
  hasFetched: false, 

  obtenerConductores: async () => {
    if (get().hasFetched) return; 

    try {
      const data = await getConductores();
      set({ conductores: data, hasFetched: true }); 
    } catch (error) {
      console.error('Failed to fetch Conductores:', error);
    }
  },

  crearConductor: async (newConductor: IConductorCreate) => {
    try {
      const createdConductor = await createConductor(newConductor);
      set((state) => ({
        conductores: [...state.conductores, createdConductor],
      }));
    } catch (error) {
      console.error('Failed to create Conductor:', error);
    }
  },

  actualizarConductor: async (updatedConductor: IConductorUpdate) => {
    try {
      const updatedConductorFromServer = await updateConductor(updatedConductor);
      set((state) => ({
        conductores: state.conductores.map((conductor) =>
          conductor.id === updatedConductor.id ? updatedConductorFromServer : conductor
        ),
      }));
    } catch (error) {
      console.error('Failed to update Conductor:', error);
    }
  },
}));

export default useConductorestore;
