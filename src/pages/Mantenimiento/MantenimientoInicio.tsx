import { styled } from 'styled-components'
import { ContainerPadre, MensajeBienvenida, DescHijo } from '../ComponentsUI';
import Ticket from './Components/Ticket';

const ContainerTickets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  min-height: 50vh;
  min-width: 100vh;
  border: 1px solid black;
  border-radius: 15px;
  margin-bottom: 50px;

  /* Estilos para pantallas celulares y tablets*/
  @media (max-width: 800px) {
  min-height: 50vh
  }
`
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


const MantenimientoInicio = () => {

  return <>
    <ContainerPadre>
      <MensajeBienvenida>Hola, Melina</MensajeBienvenida>
      <DescHijo>En curso</DescHijo>
      <ContainerTickets>
        {Tickets.map((ticket) => (
          <Ticket key={ticket.id} {...ticket}></Ticket>
        ))}
      </ContainerTickets>
      <DescHijo>Cerrados</DescHijo>
      <ContainerTickets>
        {Tickets.map((ticket) => (
          <Ticket key={ticket.id} {...ticket}></Ticket>
        ))}
      </ContainerTickets>
    </ContainerPadre>
  </>
}

export default MantenimientoInicio
