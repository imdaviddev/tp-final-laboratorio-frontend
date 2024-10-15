import { create } from 'zustand';
import { ITicket, ITicketCreate, ITicketUpdate } from '../api/models/tickets.models';
import { createTicket, getTickets, updateTicket } from '../api/services/tickets.services';

type ticketstore = {
    Tickets: ITicket[];
    hasFetched: boolean;
    obtenerTickets: () => Promise<void>;
    obtenerTicket: (ticketId: number) => Promise<ITicket>;
    crearTicket: (newTicket: ITicketCreate) => Promise<void>;
    actualizarTicket: (updatedTicket: ITicketUpdate) => Promise<void>;
};

const useTicketstore = create<ticketstore>((set, get) => ({
    Tickets: [],
    hasFetched: false,

    obtenerTickets: async () => {
        if (get().hasFetched) return;

        try {
            const data = await getTickets();
            set({ Tickets: data, hasFetched: true });
        } catch (error) {
            console.error('Failed to fetch Tickets:', error);
        }
    },

    obtenerTicket: async (ticketId: number) => {
        try {
            //const data = await getRecorridoById(recorridoId); OPCION POR API
            return get().Tickets.find(r => r.id_ticket === ticketId);
        } catch (error) {
            console.error('Failed to fetch Ticket:', error);
        }
    },

    crearTicket: async (newTicket: ITicketCreate) => {
        try {
            const createdTicket = await createTicket(newTicket);
            set((state) => ({
                Tickets: [...state.Tickets, createdTicket],
            }));
        } catch (error) {
            console.error('Failed to create Ticket:', error);
        }
    },

    actualizarTicket: async (updatedTicket: ITicketUpdate) => {
        try {
            const updatedTicketFromServer = await updateTicket(updatedTicket);
            set((state) => ({
                Tickets: state.Tickets.map((ticket) =>
                    ticket.id_ticket === updatedTicket.id_ticket ? updatedTicketFromServer : ticket
                ),
            }));
        } catch (error) {
            console.error('Detalles del error:', error.response?.data || error.message);
        }
    },

}));

export default useTicketstore;
