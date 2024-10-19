import { create } from 'zustand';
import { IProveedor } from '../api/models/proveedores.models';
import { createProveedor, getProveedores, updateProveedor, deleteProveedor } from '../api/services/proveedor.service';

type proveedorestore = {
  proveedores: IProveedor[];
  hasFetched: boolean; 
  obtenerProveedores: () => Promise<void>;
  crearProveedor: (newProveedor: IProveedor) => Promise<void>;
  actualizarProveedor: (updatedProveedor: IProveedor) => Promise<void>;
};

const useProveedorestore = create<proveedorestore>((set, get) => ({
  proveedores: [],
  hasFetched: false, 

  obtenerProveedores: async () => {
    if (get().hasFetched) return; 

    try {
      const data = await getProveedores();
      set({ proveedores: data, hasFetched: true }); 
    } catch (error) {
      console.error('Failed to fetch Proveedores:', error);
    }
  },

  crearProveedor: async (newProveedor: IProveedor) => {
    try {
      const createdProveedor = await createProveedor(newProveedor);
      set((state) => ({
        proveedores: [...state.proveedores, createdProveedor],
      }));
    } catch (error) {
      console.error('Failed to create Proveedor:', error);
    }
  },

  actualizarProveedor: async (updatedProveedor: IProveedor) => {
    try {
      const updatedProveedorFromServer = await updateProveedor(updatedProveedor);
      set((state) => ({
        proveedores: state.proveedores.map((proveedor) =>
            proveedor.id === updatedProveedor.id ? updatedProveedorFromServer : proveedor
        ),
      }));
    } catch (error) {
      console.error('Failed to update Proveedor:', error);
    }
  },
}));

export default useProveedorestore;
