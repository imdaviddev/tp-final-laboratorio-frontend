import { ContainerPadre, MensajeBienvenida } from "../ComponentsUI"
import Ticket from "./Components/Ticket"
import FiltrarHistorial from './Components/FiltrarHistorial'
import { ContainerTickets } from "./Components/BasicTabs/BasicTabs"
import useTicketstore from "../../store/ticketsContext"
import { useEffect } from "react"
import { Estado } from '../../api/models/tickets.models';


const MantenimientoHistorial = () => {

  const { Tickets, obtenerTickets, hasFetched } = useTicketstore();

  useEffect(() => {
    if (!hasFetched) {
      obtenerTickets();
    }
  }, [obtenerTickets, hasFetched]);

  return (
    <ContainerPadre>
      <MensajeBienvenida>Historial</MensajeBienvenida>
      <FiltrarHistorial></FiltrarHistorial>
      <ContainerTickets>
      {Tickets.map((ticket) => (
            ticket.estado !== Estado.EN_CURSO && (
              <Ticket key={ticket.id_ticket} {...ticket}></Ticket>
            )
          ))}
      </ContainerTickets>
    </ContainerPadre>

  )
}

export default MantenimientoHistorial
