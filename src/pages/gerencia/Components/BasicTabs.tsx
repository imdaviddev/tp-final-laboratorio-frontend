import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BasicPie from '../../../components/Graphs/BasicPie';
import BasicBars from '../../../components/Graphs/BasicBars';
import ContainerGrafico from '../../../components/ContainerGrafico';
import { Boton } from '../../ComponentsUI/Botones';
import { ButtonGroup, Container, Reportes } from '../../ComponentsUI';
import { tabStyles, commonTabSx } from '../../../constants/styles';


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
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          TabIndicatorProps={{
            style: { backgroundColor: tabStyles.indicatorColor },
          }}
        >
          <Tab label="Gastos" {...a11yProps(0)} sx={commonTabSx} />
          <Tab label="Recorridos" {...a11yProps(1)} sx={commonTabSx} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Reportes>
          <ContainerGrafico tamanio="350" grafico={<BasicPie />}/>
        </Reportes>
        <Container>
          <ButtonGroup>
            <Boton> Ver Gastos Semanales</Boton>
            <Boton> Ver Gastos Mensuales</Boton>
          </ButtonGroup>
        </Container>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Reportes>
        <ContainerGrafico tamanio="350" grafico={<BasicBars />}/>
        </Reportes>
        <Container>
          <ButtonGroup>
            <Boton> Ver recorridos Semanales</Boton>
            <Boton> Ver recorridos Mensuales</Boton>
          </ButtonGroup>
        </Container>
      </CustomTabPanel>
    </Box>
  );
}
