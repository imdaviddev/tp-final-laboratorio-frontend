import { create } from 'zustand';
import { IRepuesto, IRepuestoUpdate } from '../api/models/respuestos.models';
import { getRepuestos, updateRepuesto } from '../api/services/repuestos.services';

type repuestosTore = {
    repuestos: IRepuesto[];
    hasFetched: boolean;
    obtenerRepuestos: () => Promise<void>;
    actualizarRepuesto: (updatedRepuesto: IRepuestoUpdate) => Promise<void>;
};
const useRepuestoStore = create<repuestosTore>((set, get) => ({
    repuestos: [],
    hasFetched: false,

    obtenerRepuestos: async () => {
        if (get().hasFetched) return;

        try {
            const data = await getRepuestos();
            set({ repuestos: data, hasFetched: true });
        } catch (error) {
            console.error('Failed to fetch repuestos:', error);
        }
    },
    actualizarRepuesto: async (updatedRepuesto: IRepuestoUpdate) => {
        try {
            const updatedRepuestoFromServer = await updateRepuesto(updatedRepuesto);
            set((state) => ({
                repuestos: state.repuestos.map((repuesto) =>
                    repuesto.id === updatedRepuesto.id_repuesto ? updatedRepuestoFromServer : repuesto
                ),
            }));
        } catch (error) {
            console.error('Failed to update Repuesto:', error);
        }
    }
}));

export default useRepuestoStore;