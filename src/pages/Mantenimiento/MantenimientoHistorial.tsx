import { ContainerPadre, MensajeBienvenida } from "../ComponentsUI"
import Ticket from "./Components/Ticket"
import FiltrarHistorial from './Components/FiltrarHistorial'
import { ContainerTickets } from "./Components/BasicTabs/BasicTabs"

const Tickets = [
  {
    id: "aaa1",
    name: "sff1",
    matricula: "asdadf1",
    estado: "mantenimiento"
  },
  {
    id: "aaa1",
    name: "sff1",
    matricula: "asdadf1",
    estado: "mantenimiento"
  },
  {
    id: "aaa1",
    name: "sff1",
    matricula: "asdadf1",
    estado: "mantenimiento"
  }
];

const MantenimientoHistorial = () => {
  return (
    <ContainerPadre>
      <MensajeBienvenida>Historial</MensajeBienvenida>
      <FiltrarHistorial></FiltrarHistorial>
      <ContainerTickets>
          {Tickets.map((ticket) => (
            <Ticket key={ticket.id} {...ticket}></Ticket>
          ))}
        </ContainerTickets>
    </ContainerPadre>

  )    
}

export default MantenimientoHistorial
