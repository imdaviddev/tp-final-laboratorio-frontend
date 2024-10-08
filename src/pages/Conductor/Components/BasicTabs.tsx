import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { RecorridoDetalle, ContainerDetalle } from '../index';
import Detalle from './Detalle';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered TabIndicatorProps={{
            style: {
              backgroundColor: 'red', // Cambia el borde inferior de la pestaña activa a rojo
            },
          }}>
          <Tab 
            label="Semanales" 
            {...a11yProps(0)} 
            sx={{
              '&:hover': {
                color: 'red', // Color rojo cuando el mouse pasa por encima
              },
              '&.Mui-selected': {
                color: 'red', // Cambia el color del texto cuando la pestaña está seleccionada
              },
            }} 
          />
          <Tab 
            label="Mensuales" 
            {...a11yProps(1)} 
            sx={{
              '&:hover': {
                color: 'red', // Color rojo cuando el mouse pasa por encima
              },
              '&.Mui-selected': {
                color: 'red', // Cambia el color del texto cuando la pestaña está seleccionada
              },
            }} 
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ContainerDetalle>
          <RecorridoDetalle>
            <Detalle tipo="Recorrido" valor="#064"></Detalle>
            <Detalle tipo="Fecha" valor="25/08/2024"></Detalle>
            <a href="#">ver detalle</a>
          </RecorridoDetalle>
          <RecorridoDetalle>
            <Detalle tipo="Recorrido" valor="#064"></Detalle>
            <Detalle tipo="Fecha" valor="25/08/2024"></Detalle>
            <a href="#">ver detalle</a>
          </RecorridoDetalle>
          <RecorridoDetalle>
            <Detalle tipo="Recorrido" valor="#064"></Detalle>
            <Detalle tipo="Fecha" valor="25/08/2024"></Detalle>
            <a href="#">ver detalle</a>
          </RecorridoDetalle>
          <RecorridoDetalle>
            <Detalle tipo="Recorrido" valor="#064"></Detalle>
            <Detalle tipo="Fecha" valor="25/08/2024"></Detalle>
            <a href="#">ver detalle</a>
          </RecorridoDetalle>
          <RecorridoDetalle>
            <Detalle tipo="Recorrido" valor="#064"></Detalle>
            <Detalle tipo="Fecha" valor="25/08/2024"></Detalle>
            <a href="#">ver detalle</a>
          </RecorridoDetalle>
        </ContainerDetalle>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ContainerDetalle>
          <RecorridoDetalle>
            <Detalle tipo="Recorrido" valor="#059"></Detalle>
            <Detalle tipo="Fecha" valor="20/08/2024"></Detalle>
            <a href="#">ver detalle</a>
          </RecorridoDetalle>
        </ContainerDetalle>
      </CustomTabPanel>
    </Box>
  );
}
