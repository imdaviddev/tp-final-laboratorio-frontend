import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { tabStyles, commonTabSx } from '../../../../constants/styles';
import a11yProps from './a11yProps'
import CustomTabPanel from './CustomTabPanel';
import { styled } from 'styled-components'
import Ticket from '../../Components/Tickets/Ticket';
import useTicketstore from '../../../../store/ticketsContext';
import { useEffect } from 'react';
import { Estado } from '../../../../api/models/tickets.models';

export const ContainerTickets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  min-height: 40vh;
  max-height: 80vh;
  min-width: 100vh;
  border: 1px solid #e7bcbc;
  border-radius: 5px;
  margin-bottom: 50px;


  /* Estilos para pantallas celulares y tablets*/
  @media (max-width: 800px) {
  min-height: 50vh
  }

  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px; /* Ancho de la barra de scroll vertical */
  }

  &::-webkit-scrollbar-track {
    background: #e7bcbc; /* Color del fondo de la barra de scroll */
    border-radius: 10px; /* Radio de los bordes del track */
    
  }

  &::-webkit-scrollbar-thumb {
    background: #da7168; /* Color de la barra de scroll */
    border-radius: 10px; /* Radio de los bordes del thumb */

  }

  &::-webkit-scrollbar-thumb:hover {
    background: #cc2514; /* Color de la barra de scroll al pasar el mouse */
  }
`

export default function BasicTabs(props) {

  const { Tickets, obtenerTickets, hasFetched } = useTicketstore();

  useEffect(() => {
    if (!hasFetched) {
      obtenerTickets();
    }
  }, [obtenerTickets, hasFetched]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          TabIndicatorProps={{
            style: { backgroundColor: tabStyles.indicatorColor },
          }}
        >
          <Tab label={props.subdesc} {...a11yProps(0)} sx={commonTabSx} />
          <Tab label={props.subdesc2do} {...a11yProps(1)} sx={commonTabSx} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ContainerTickets>
          {Tickets.map((ticket) => (
            ticket.estado === Estado.EN_CURSO && (
              <Ticket key={ticket.id} {...ticket}></Ticket>
            )
          ))}
        </ContainerTickets>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ContainerTickets>
          {Tickets.map((ticket) => (
            ticket.estado !== Estado.EN_CURSO && (
              <Ticket key={ticket.id} {...ticket}></Ticket>
            )
          ))}
        </ContainerTickets>
      </CustomTabPanel>
    </Box>
  );
}
