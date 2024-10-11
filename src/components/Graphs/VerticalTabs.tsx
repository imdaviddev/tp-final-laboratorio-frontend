import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BasicBars from './BasicBars';
import { Boton } from '../../pages/ComponentsUI/Botones';
import { ButtonGroup, Container } from '../../pages/ComponentsUI/index'
import ContainerGrafico from '../ContainerGrafico';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Consumo de gasolina" {...a11yProps(0)} />
        <Tab label="Frecuencia de Reparaciones" {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Container>
          <ButtonGroup>
            <Boton>Ver consumo semanal</Boton>
            <Boton>Ver consumo Mensual</Boton>
          </ButtonGroup>
        </Container>
        <ContainerGrafico tamanio="400" grafico={<BasicBars/>} />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Container>
          <ButtonGroup>
            <Boton>Ver reparaciones semanales</Boton>
            <Boton>Ver reparaciones Mensuales</Boton>
          </ButtonGroup>
          <ContainerGrafico tamanio="400" grafico={<BasicBars/>}/>
        </Container>
      </TabPanel>
    </Box>
  );
}