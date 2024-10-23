import axios from 'axios';
import { ITicket, ITicketCreate, ITicketUpdate } from "../models/tickets.models";

const API_URL_BASE = 'http://127.0.0.1:3000'
const API_URL = API_URL_BASE + '/tickets';

export async function getTickets(): Promise<ITicket[]> {
    try {
        const response = await axios.get<ITicket[]>(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener los tickets');
    }
}

export async function updateTicket(ticket: ITicketUpdate): Promise<ITicket> {
    try {
        const response = await axios.put<ITicket>(`${API_URL}/${ticket.id}`, ticket, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error al actualizar el ticket');
    }
}

export async function createTicket(ticket: ITicketCreate): Promise<ITicket> {
    try {
        const response = await axios.post<ITicket>(API_URL, ticket, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error al crear el ticket');
    }
}