import { create } from 'zustand';
import { ICatalogo } from '../api/models/catalogos.models';
import { createCatalogo, getCatalogos, updateCatalogo, deleteCatalogo } from '../api/services/catalogo.service';

type catalogostore = {
    catalogos: ICatalogo[];
    hasFetched: boolean;
    obtenerCatalogos: () => Promise<void>;
    crearCatalogo: (newCatalogo: ICatalogo) => Promise<void>;
    actualizarCatalogo: (updatedCatalogo: ICatalogo) => Promise<void>;
};

const useCatalogostore = create<catalogostore>((set, get) => ({
    catalogos: [],
    hasFetched: false,

    obtenerCatalogos: async () => {
        if (get().hasFetched) return;

        try {
            const data = await getCatalogos();
            set({ catalogos: data, hasFetched: true });
        } catch (error) {
            console.error('Failed to fetch Catalogos:', error);
        }
    },

    crearCatalogo: async (newCatalogo: ICatalogo) => {
        try {
            const createdCatalogo = await createCatalogo(newCatalogo);
            set((state) => ({
                catalogos: [...state.catalogos, createdCatalogo],
            }));
        } catch (error) {
            console.error('Failed to create Catalogo:', error);
        }
    },

    actualizarCatalogo: async (updatedCatalogo: ICatalogo) => {
        try {
            const updatedCatalogoFromServer = await updateCatalogo(updatedCatalogo);
            set((state) => ({
                catalogos: state.catalogos.map((catalogo) =>
                    catalogo.id === updatedCatalogo.id ? updatedCatalogoFromServer : catalogo
                ),
            }));
        } catch (error) {
            console.error('Failed to update Catalago:', error);
        }
    },
}));

export default useCatalogostore;
